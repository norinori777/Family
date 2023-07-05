package jp.norinori777.domain.Room.model;

import lombok.Data;

@Data
public class RoomName {
    private String roomName;

    RoomName(String roomName) {
        if(roomName.length() > 32) throw new IllegalArgumentException("roomName is too long");
        this.roomName = roomName;
    }

}