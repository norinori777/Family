package jp.norinori777.domain.model.Room;

import lombok.Data;

@Data
public class ChatRoomMemberUser {
    private Integer roomId;
    private Integer userId;
    private String name;
    private String emailAddress;
}