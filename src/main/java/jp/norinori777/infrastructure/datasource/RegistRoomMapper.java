package jp.norinori777.infrastructure.datasource;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.Room.ChatRoomMemberUser;
import jp.norinori777.domain.model.Room.RegistRoom;

@Mapper
public interface RegistRoomMapper {
	public int insertChatRoom(RegistRoom room);

	public int insertChatRoomMember(ChatRoomMemberUser member);
}
