package jp.norinori777.domain.model.Room;

import lombok.Data;

@Data
public class RoomDescription {
    private String roomDescription;

    RoomDescription(String roomDescription) {
        if(roomDescription.length() > 256) throw new IllegalArgumentException("roomDescription is too long");
        this.roomDescription = roomDescription;
    }
}