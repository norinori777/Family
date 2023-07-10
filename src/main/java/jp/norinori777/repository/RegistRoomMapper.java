package jp.norinori777.repository;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.application.controller.ChatRoom.RegistRoom;

@Mapper
public interface RegistRoomMapper {
	public int insertOne(RegistRoom room);
}
