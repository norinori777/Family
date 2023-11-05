package jp.norinori777.application.service.ChatRoom;

import java.util.List;

import jp.norinori777.domain.model.Room.ChatRoomMemberUser;

public interface ListRoomMembersService {
    public List<ChatRoomMemberUser> getRoomMembers(Integer roomId);
}