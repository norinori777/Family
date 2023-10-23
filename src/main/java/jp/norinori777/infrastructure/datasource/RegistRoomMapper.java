package jp.norinori777.infrastructure.datasource;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.application.controller.ChatRoom.RegistRoom;

@Mapper
public interface RegistRoomMapper {
	public int insertOne(RegistRoom room);
}
