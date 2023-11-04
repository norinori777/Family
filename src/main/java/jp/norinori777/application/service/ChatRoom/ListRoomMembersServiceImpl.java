package jp.norinori777.application.service.ChatRoom;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.User.ChatRoomMemberUser;
import jp.norinori777.infrastructure.datasource.ListRoomMembers;

@Service
public class ListRoomMembersServiceImpl implements ListRoomMembersService {
    @Autowired
    private ListRoomMembers mapper;
    
    @Override
    public List<ChatRoomMemberUser> getRoomMembers(Integer roomId) {
        return mapper.selectRoomMembers(roomId);
    }

}