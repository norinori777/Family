package jp.norinori777.domain.model.Message;

import lombok.Data;

@Data
public class TalkMessage {
    private Integer messageId;
    private String message;
    private Integer userId;
    private String name;
    private Integer roomId;
    private Integer state;
    private String createAt;
    private String updateAt;  
}