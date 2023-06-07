package jp.norinori777.domain.user;

import lombok.Data;

@Data
public class UserId {
	private String userId;
	
	public UserId(String userId) throws Exception {
		if(userId.length() > 8) {
			throw new Exception("UserId must be 8 characters or less");
		}
		this.userId = userId;
	}
}
