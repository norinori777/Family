package jp.norinori777.domain.user.model;

import java.security.Timestamp;

import lombok.Data;

@Data
public class User {
	private String password;
	private String emailAddress;
	private boolean enabled;
	private Integer state;
	private Integer loginMissTimes;
	private Timestamp createAt;
	private Timestamp updateAt;
}
