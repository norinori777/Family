package jp.norinori777.domain.RegistUser;

import jp.norinori777.domain.user.EmailAddress;
import jp.norinori777.domain.user.Name;
import jp.norinori777.domain.user.Password;
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
	private String name;
	private String password;
	private String emailAddress;
}
