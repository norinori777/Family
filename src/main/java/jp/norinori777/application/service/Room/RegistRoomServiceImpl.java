package jp.norinori777.application.service.Room;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.application.controller.ChatRoom.RegistRoom;
import jp.norinori777.domain.model.Room.RegistRoomService;
import jp.norinori777.infrastructure.datasource.RegistRoomMapper;

@Service
public class RegistRoomServiceImpl implements RegistRoomService {

	@Autowired
	private RegistRoomMapper mapper;
	
	@Override
	public void addRoom(RegistRoom room) {
		mapper.insertOne(room);
	}	
}
