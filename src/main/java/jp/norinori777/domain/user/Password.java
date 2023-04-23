package jp.norinori777.domain.user;

import lombok.Data;

@Data
public class Password {
	private String password;
	
	public Password(String password) throws Exception {
		if(password.length() > 20) {
			throw new Exception("Password must be 20 character or less.");
		}
		this.password = password;
	}
}
