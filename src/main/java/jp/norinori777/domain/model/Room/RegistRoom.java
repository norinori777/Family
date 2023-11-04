package jp.norinori777.domain.model.Room;

import java.util.List;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegistRoom {
    private Integer roomId;
    @NotBlank
    @Size(max = 32)
    //private RoomName roomName;
    private String roomName;
    @Size(max = 256)
    //private RoomDescription roomDescription;
    private String roomDescription;
    @Min(1)
    private Integer roomOwnerId;
    private List<ChatRoomMemberUser> chatRoomMembers;
}