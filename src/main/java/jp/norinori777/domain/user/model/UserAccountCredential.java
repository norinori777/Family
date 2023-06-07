package jp.norinori777.domain.user.model;

import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserAccountCredential implements UserDetails {
	private String emailAddress;
	private String password;
	private boolean enabled;
	private Integer state;
	private Integer loginMissTimes;

	private Collection<? extends GrantedAuthority> authorities;


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities;
	}

	@Override
	public String getUsername() {
		return this.emailAddress;
	}

	@Override
	public String getPassword() {
		return this.password;
	}
	@Override
	public boolean isAccountNonExpired() {
		return this.state == 0;
	}

	@Override
	public boolean isAccountNonLocked() {
		return this.loginMissTimes < 5;
	}

	@Override
	public boolean isEnabled() {
		return this.enabled;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return this.state == 0;
	}
}
