package jp.norinori777.infrastructure.datasource.chat;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.application.controller.User.Model.RegistUser;

@Mapper
public interface RegistUserMapper {
	public int insertOne(RegistUser user);
}
