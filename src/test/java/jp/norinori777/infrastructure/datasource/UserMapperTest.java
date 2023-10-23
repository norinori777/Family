package jp.norinori777.infrastructure.datasource;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.domain.model.User.User;

@Sql("EditUserMapperTest.sql")
@Transactional
@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UserMapperTest {
    
        @Autowired
        private UserMapper userMapper;
    
        private User user;
    
        @Test
        public void test_selectUser() {
            user = userMapper.selectUser("yamada@example.com");
            
            assertEquals("Taro Yamada", user.getName());
            assertEquals("yamada@example.com", user.getEmailAddress());
        }
}