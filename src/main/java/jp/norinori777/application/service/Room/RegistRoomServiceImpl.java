package jp.norinori777.application.service.Room;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.domain.model.Room.ChatRoomMemberUser;
import jp.norinori777.domain.model.Room.RegistRoom;
import jp.norinori777.domain.model.Room.RegistRoomService;
import jp.norinori777.infrastructure.datasource.ListRoomMembers;
import jp.norinori777.infrastructure.datasource.RegistRoomMapper;
import jp.norinori777.infrastructure.datasource.TalkMessageMapper;

@Service
@Transactional
public class RegistRoomServiceImpl implements RegistRoomService {

	@Autowired
	private RegistRoomMapper mapper;

	@Autowired
	private TalkMessageMapper talkMessageMapper;

	@Autowired ListRoomMembers listRoomMembersMapper;
	
	@Override
	public void addRoom(RegistRoom room) {
		mapper.insertChatRoom(room);
		List<ChatRoomMemberUser>members = room.getChatRoomMembers();
	
		mapper.insertChatRoomMembers(members);
	}

	@Override
	public void updateRoom(RegistRoom room) {
		mapper.updateChatRoom(room);
		List<ChatRoomMemberUser>members = room.getChatRoomMembers();
		List<ChatRoomMemberUser>nowMembers = listRoomMembersMapper.selectRoomMembers(room.getRoomId());

		mapper.updateChatRoom(room);

		for(ChatRoomMemberUser member : members) {
			if(!isExistMember(member, nowMembers)){
				// TODO: ここでルームIDをセットするのはおかしい
				// TODO: SETTERを利用して代入しているため、オブジェクトの使い回しになっている
				member.setRoomId(room.getRoomId());
				mapper.insertChatRoomMember(member);
			} 
		}
		for(ChatRoomMemberUser nowMember : nowMembers) {
			if(!isExistMember(nowMember, members)) mapper.deleteChatRoomMember(nowMember);
		}
	}

	private boolean isExistMember(ChatRoomMemberUser member, List<ChatRoomMemberUser> verifiedMembers) {
		for(ChatRoomMemberUser verifiedMember : verifiedMembers) {
			if(member.getUserId().equals(verifiedMember.getUserId())) {
				return true;
			}
		}
		return false;
	}

	@Override
	public void deleteRoom(Integer roomId) {
		// TODO:　例外設計を検討する
		talkMessageMapper.deleteChatRoomAllTalkMessages(roomId);
		mapper.deleteChatRoomAllMembers(roomId);
		mapper.deleteChatRoom(roomId);
	}

}
