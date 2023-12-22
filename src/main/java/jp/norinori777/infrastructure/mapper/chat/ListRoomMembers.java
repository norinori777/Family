package jp.norinori777.infrastructure.mapper.chat;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.Room.ChatRoomMemberUser;

@Mapper
public interface ListRoomMembers {
	public List<ChatRoomMemberUser> selectRoomMembers(Integer roomId);
}
