package jp.norinori777.repository;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.User.User;

@Mapper
public interface UserMapper {
    public User selectUser(String emailAddress);
}