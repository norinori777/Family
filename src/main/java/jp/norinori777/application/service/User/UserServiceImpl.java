package jp.norinori777.application.service.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.User.User;
import jp.norinori777.infrastructure.datasource.UserMapper;
import jp.norinori777.infrastructure.datasource.Repository.UpdateUserExclusiveControl;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserMapper mapper;

    @Autowired
    private UpdateUserExclusiveControl updateUserExclusiveControl;
    
    @Override
    public User getUser(String emailAddress) {
        return mapper.selectUser(emailAddress);
    }

    @Override
    public int updateUser(User user, String emailAddress, Integer version) {
        return updateUserExclusiveControl.updateUserExclusiveControl(user, emailAddress, version);
    }

    @Override
    public void deleteUser(String emailAddress) {
        // ユーザーの有無チェック
        if (mapper.selectUserCount(emailAddress) == 0) {
            throw new RuntimeException("ユーザーが存在しません");
        }
        mapper.deleteUser(emailAddress);
    }
}