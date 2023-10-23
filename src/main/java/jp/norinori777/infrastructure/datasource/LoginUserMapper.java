package jp.norinori777.infrastructure.datasource;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.User.User;

@Mapper
public interface LoginUserMapper {
	public User selectOne(String emailAddress);

	public List<String> getRoleList(String emailAddress);
}
