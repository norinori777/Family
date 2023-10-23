package jp.norinori777.application.service.User;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.dao.OptimisticLockingFailureException;

import jp.norinori777.domain.model.User.User;
import jp.norinori777.infrastructure.datasource.EditUserMapper;
import jp.norinori777.infrastructure.datasource.UserMapper;
import jp.norinori777.infrastructure.datasource.Repository.UpdateUserExclusiveControl;

@ExtendWith(MockitoExtension.class) // Mockitoを使用するためのアノテーション
public class UserServiceImplTest {
    @InjectMocks
    private UserServiceImpl userService;

    @Mock
    private UserMapper userMapper;

    @Mock
    private UpdateUserExclusiveControl updateUserExclusiveControl;

    @Test
    void testGetUser() {
        User user = new User();
        user.setName("Taro Yamada");
        user.setEmailAddress("yamada@example.com");
        user.setPassword("password");
        user.setEnabled(true);
        user.setState(0);
        user.setLoginMissTimes(0);
        user.setCreateAt("2023-01-01 00:00:00");
        user.setUpdateAt("2023-01-01 00:00:00");
        
        doReturn(user).when(userMapper).selectUser("yamada@example.com");

        User result = userService.getUser("yamada@example.com");
        assertEquals("Taro Yamada", result.getName());
        assertEquals("yamada@example.com", result.getEmailAddress());
    }

    @Test
    void testUpdateUser() {
        User user = new User();
        user.setName("Test Yamada");
        user.setEmailAddress("test@example.com");
        user.setVersion(1);
        
        userService.updateUser(user, "yamada@example.com", 1);
        // updateOneメソッドが1回呼ばれたかどうかを検証
        verify(updateUserExclusiveControl,times(1)).updateUserExclusiveControl(user, "yamada@example.com", 1);
    }
}
