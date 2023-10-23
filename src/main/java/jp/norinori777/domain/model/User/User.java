package jp.norinori777.domain.model.User;

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
	private String createAt;
	private String updateAt;
	private Integer version;

	public User cretaeNewVersionUser() {
		User user = new User();
		user.setUserId(this.userId);
		user.setName(this.name);
		user.setPassword(this.password);
		user.setEmailAddress(this.emailAddress);
		user.setEnabled(this.enabled);
		user.setState(this.state);
		user.setLoginMissTimes(this.loginMissTimes);
		user.setCreateAt(this.createAt);
		user.setUpdateAt(this.updateAt);
		user.setVersion(this.version + 1);
		return user;
	}
}
