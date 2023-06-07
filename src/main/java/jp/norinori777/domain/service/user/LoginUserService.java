package jp.norinori777.domain.service.user;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;

import jp.norinori777.domain.user.model.User;
import jp.norinori777.domain.user.model.UserAccountCredential;

public interface LoginUserService {
	public User getUser(String emailAddress);

	public List<GrantedAuthority> getUserRoles(String emailAddress);

	public UserAccountCredential getUserAccountCredential(String emailAddress);
}
