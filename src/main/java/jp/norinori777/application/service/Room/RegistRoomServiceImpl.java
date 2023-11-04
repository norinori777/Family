package jp.norinori777.application.service.Room;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.domain.model.Room.ChatRoomMemberUser;
import jp.norinori777.domain.model.Room.RegistRoom;
import jp.norinori777.domain.model.Room.RegistRoomService;
import jp.norinori777.infrastructure.datasource.RegistRoomMapper;

@Service
@Transactional
public class RegistRoomServiceImpl implements RegistRoomService {

	@Autowired
	private RegistRoomMapper mapper;
	
	@Override
	public void addRoom(RegistRoom room) {
		mapper.insertChatRoom(room);
		List<ChatRoomMemberUser>members = room.getChatRoomMembers();
		for(ChatRoomMemberUser member : members) {
			member.setRoomId(room.getRoomId());
			mapper.insertChatRoomMember(member);
		}
	}
}
