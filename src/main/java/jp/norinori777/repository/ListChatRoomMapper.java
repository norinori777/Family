package jp.norinori777.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.Room.Room;

@Mapper
public interface ListChatRoomMapper {
    public List<Room> selectRooms(Integer userId);
}