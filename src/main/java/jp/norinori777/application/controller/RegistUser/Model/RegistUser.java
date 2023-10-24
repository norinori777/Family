package jp.norinori777.application.controller.RegistUser.Model;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;
// import jp.norinori777.domain.user.EmailAddress;
// import jp.norinori777.domain.user.Name;
// import jp.norinori777.domain.user.Password;
import lombok.Data;

@Data
public class RegistUser {
//	private Name name;
//	private Password password;
//	private EmailAddress mailAddress;
//	
//	public RegistUser(Name name, Password password, EmailAddress mailAddress){
//		this.name = name;
//		this.password = password;
//		this.mailAddress = mailAddress;
//	}
	@NotBlank
	@Length(min=1, max=32)
	private String name;
	@NotBlank
	@Length(min=1, max=32)
	private String password;
	@NotBlank
	@Length(min=1, max=319)
	private String emailAddress;
	@NotBlank
	private String roleId;
}
