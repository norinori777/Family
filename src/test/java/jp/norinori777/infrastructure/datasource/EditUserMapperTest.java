package jp.norinori777.infrastructure.datasource;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.domain.model.User.User;
import jp.norinori777.infrastructure.datasource.chat.EditUserMapper;

@Sql("EditUserMapperTest.sql")
@Transactional
@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class EditUserMapperTest {

    @Autowired
    private EditUserMapper editUserMapper;

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Test
    public void test_updateOne() {
        User user = new User();
        user.setName("updated user");
        user.setEmailAddress("updated@example.com");
        int result = editUserMapper.updateOne(user, "yamada@example.com");
        assertEquals(1, result);
        Map<String, Object> userMap = jdbcTemplate.queryForMap("SELECT * FROM m_user WHERE email_address = ?", user.getEmailAddress());
        assertEquals(user.getName(), userMap.get("name"));
        assertEquals(user.getEmailAddress(), userMap.get("email_address"));
    }
}
