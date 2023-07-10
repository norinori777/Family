package jp.norinori777.domain.model.Message;

import lombok.Data;

@Data
public class ResponseMessage {
	private String content;
	
	public ResponseMessage(String content) {
		this.content = content;
	}
}
