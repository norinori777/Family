package jp.norinori777.domain.model.User;

import java.security.Timestamp;

import lombok.Data;

@Data
public class User {
	private Integer userId;
	private String name;
	private String password;
	private String emailAddress;
	private boolean enabled;
	private Integer state;
	private Integer loginMissTimes;
	private Timestamp createAt;
	private Timestamp updateAt;
}
