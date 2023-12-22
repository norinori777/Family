package jp.norinori777.infrastructure.mapper.chat;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.User.User;

@Mapper
public interface UserMapper {
    public User selectUser(String emailAddress);

    public int selectUserCount(String emailAddress);

    public User selectUserForUpdate(String emailAddress);

    public void deleteUser(String emailAddress);
}