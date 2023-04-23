package jp.norinori777.domain.user;

import lombok.Data;

@Data
public class EmailAddress {
	
	private String emailAddress;
	
	public EmailAddress(String emailAddress) throws Exception {	
		if (emailAddress.length() > 255) {
			throw new Exception("Email address must be 255 characters or less");
		}
		String[] parts = emailAddress.split("@");
		if (parts.length != 2) {
			throw new Exception("Invalid email address");
		}
		if (parts[0].length() > 64) {
			throw new Exception("Local part of email address must be 64 characters or less");
		}
		this.emailAddress = emailAddress;
	}

}
