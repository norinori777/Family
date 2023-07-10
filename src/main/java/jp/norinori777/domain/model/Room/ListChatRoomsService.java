package jp.norinori777.domain.model.Room;

import java.util.List;

public interface ListChatRoomsService {
    public List<Room> getChatRooms(Integer userId);
}