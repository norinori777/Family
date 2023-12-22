package jp.norinori777.infrastructure.mapper.chat;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.User.User;

@Mapper
public interface LoginUserMapper {
	public User selectUser(String emailAddress);

	public List<String> getRoleList(String emailAddress);
}
