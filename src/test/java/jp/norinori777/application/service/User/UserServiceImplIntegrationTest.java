package jp.norinori777.application.service.User;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.domain.model.User.User;

@Transactional
@Sql("UserServiceImplIntegrationTest.sql")
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class UserServiceImplIntegrationTest {
    @Autowired
    private UserService userService;

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Test
    public void ユーザー更新処理で排他になった場合例外が発生すること(){
        User user = new User();
        user.setEmailAddress("hanako@example.com");
        user.setName("Hanako Yamada");
        user.setVersion(1);

        assertThrows(OptimisticLockingFailureException.class, 
            () -> userService.updateUser(user, "yamada@example.com", 1), 
            "Failed to update user due to optimistic lock.");
    }

    @Test
    public void ユーザー更新できた場合正しく更新ができていること(){
        User user = new User();
        user.setEmailAddress("test@example.com");
        user.setName("Test Yamada");
        user.setVersion(2);

        userService.updateUser(user, "Jiro@example.com", 2);
        Map<String, Object> userMap = jdbcTemplate.queryForMap("SELECT * FROM m_user WHERE email_address = ?", user.getEmailAddress());
        assertEquals(user.getName(), userMap.get("name"));
        assertEquals(user.getEmailAddress(), userMap.get("email_address"));
        assertEquals(3, userMap.get("version"));
    }
}
