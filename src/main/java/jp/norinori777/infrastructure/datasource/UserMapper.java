package jp.norinori777.infrastructure.datasource;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.User.User;

@Mapper
public interface UserMapper {
    public User selectUser(String emailAddress);

    public User selectUserForUpdate(String emailAddress);
}