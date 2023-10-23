package jp.norinori777.infrastructure.datasource;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import jp.norinori777.domain.model.User.User;

@Mapper
public interface EditUserMapper {
	public int updateOne(@Param("user")User user, @Param("emailAddress")String emailAddress);
}
