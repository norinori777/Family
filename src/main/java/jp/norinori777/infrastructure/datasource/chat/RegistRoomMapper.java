package jp.norinori777.infrastructure.datasource.chat;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.Room.ChatRoomMemberUser;
import jp.norinori777.domain.model.Room.RegistRoom;

@Mapper
public interface RegistRoomMapper {
	public int insertChatRoom(RegistRoom room);

	public int updateChatRoom(RegistRoom room);

	public int insertChatRoomMember(ChatRoomMemberUser member);

	public int insertChatRoomMembers(List<ChatRoomMemberUser> members);

	public int deleteChatRoomMember(ChatRoomMemberUser member);

	public int deleteChatRoomMembers(ChatRoomMemberUser[] members);

	public int deleteChatRoom(Integer roomId);

	public int deleteChatRoomAllMembers(Integer roomId);
}
