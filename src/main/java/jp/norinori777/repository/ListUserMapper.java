package jp.norinori777.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.user.model.User;

@Mapper
public interface ListUserMapper {
	public List<User> selectUsers();
}