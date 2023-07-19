package jp.norinori777.domain.model.Message;

import lombok.Data;

@Data
public class ChatMessage {
	private Integer roomId;
    private Integer userId;
    private String message;
    private String speaker;
    private String date;
}
