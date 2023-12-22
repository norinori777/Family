package jp.norinori777.application.service.ChatRoom;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.Room.ListChatRoomsService;
import jp.norinori777.domain.model.Room.Room;
import jp.norinori777.infrastructure.mapper.chat.ListChatRoomMapper;
@Service
public class ListChatRoomsServiceImpl implements ListChatRoomsService {
    @Autowired
    private ListChatRoomMapper mapper;
    
    @Override
    public List<Room> getChatRooms(Integer userId) {
        List<Room> rooms = null;
        try{
            rooms = mapper.selectChatRooms(userId);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return rooms;
        
    }
}
