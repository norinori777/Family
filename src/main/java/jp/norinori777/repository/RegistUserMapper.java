package jp.norinori777.repository;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.application.controller.RegistUser.Model.RegistUser;

@Mapper
public interface RegistUserMapper {
	public int insertOne(RegistUser user);
}
