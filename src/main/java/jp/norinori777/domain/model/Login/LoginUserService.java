package jp.norinori777.domain.model.Login;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;

import jp.norinori777.domain.model.User.User;
import jp.norinori777.domain.model.User.UserAccountCredential;

public interface LoginUserService {

	public User getUser(String emailAddress);

	public List<GrantedAuthority> getUserRoles(String emailAddress);

	public UserAccountCredential getUserAccountCredential(String emailAddress);
}
