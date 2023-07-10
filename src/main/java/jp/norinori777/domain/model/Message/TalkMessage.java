package jp.norinori777.domain.model.Message;

import lombok.Data;

@Data
public class TalkMessage {
    private String message;
    private String speaker;
    private String date;
}