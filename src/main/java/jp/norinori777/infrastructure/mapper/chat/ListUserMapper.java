package jp.norinori777.infrastructure.mapper.chat;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.User.User;

@Mapper
public interface ListUserMapper {
	public List<User> selectUsers();
}
