package jp.norinori777.infrastructure.datasource;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.domain.model.User.User;

@Sql("UserMapperTest.sql")
@Transactional
@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UserMapperTest {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    private UserMapper userMapper;

    private User user;

    @Test
    public void ユーザーの件数を取得する(){
        Integer count = userMapper.selectUserCount("yamada@example.com");
        assertEquals(1, count.intValue());
    }

    @Test
    public void test_selectUser() {
        user = userMapper.selectUser("yamada@example.com");
        
        assertEquals("Taro Yamada", user.getName());
        assertEquals("yamada@example.com", user.getEmailAddress());
    }

    @Test
    public void DB処理でユーザ情報が削除されていることを確認する(){
        String emailAddress = "delete@example.com";
        userMapper.deleteUser(emailAddress);

        Integer count = jdbcTemplate.queryForObject("SELECT count(*) FROM m_user where email_address = ?",  Integer.class, emailAddress);
        assertEquals(0, count.intValue());
 
    }
}