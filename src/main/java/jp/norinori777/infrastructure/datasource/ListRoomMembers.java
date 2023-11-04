package jp.norinori777.infrastructure.datasource;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.User.ChatRoomMemberUser;

@Mapper
public interface ListRoomMembers {
	public List<ChatRoomMemberUser> selectRoomMembers(Integer roomId);
}
