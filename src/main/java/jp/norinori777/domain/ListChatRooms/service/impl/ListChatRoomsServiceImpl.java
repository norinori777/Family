package jp.norinori777.domain.ListChatRooms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.ListChatRooms.service.ListChatRoomsService;
import jp.norinori777.domain.Room.model.Room;
import jp.norinori777.repository.ListChatRoomMapper;

@Service
public class ListChatRoomsServiceImpl implements ListChatRoomsService {
    @Autowired
    private ListChatRoomMapper mapper;
    
    @Override
    public List<Room> getRooms() {
        List<Room> rooms = mapper.selectRooms();
        return rooms;
    }
}
