package jp.norinori777.domain;

import lombok.Data;

@Data
public class ResponseMessage {
	private String content;
	
	public ResponseMessage(String content) {
		this.content = content;
	}
}
