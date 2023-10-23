package jp.norinori777.infrastructure.datasource.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.domain.model.User.User;
import jp.norinori777.infrastructure.datasource.EditUserMapper;
import jp.norinori777.infrastructure.datasource.UserMapper;

@Repository
public class UpdateUserExclusiveControl {

    @Autowired
    private UserMapper mapper;

    @Autowired
    private EditUserMapper editUserMapper;

    @Transactional
    public Integer updateUserExclusiveControl(User user, String emailAddress, Integer version) {
        User userForUpdate = mapper.selectUserForUpdate(emailAddress);
        if (userForUpdate.getVersion() != version) {
            
            throw new OptimisticLockingFailureException("Failed to update user due to optimistic lock.");
        }
        User updateUserData = user.cretaeNewVersionUser();
        return editUserMapper.updateOne(updateUserData, emailAddress);
    }
}
