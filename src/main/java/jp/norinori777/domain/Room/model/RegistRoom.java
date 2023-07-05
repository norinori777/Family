package jp.norinori777.domain.Room.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegistRoom {
    @NotBlank
    @Size(max = 32)
    //private RoomName roomName;
    private String roomName;
    @Size(max = 256)
    //private RoomDescription roomDescription;
    private String roomDescription;
}