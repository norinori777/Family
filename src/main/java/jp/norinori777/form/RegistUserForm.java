package jp.norinori777.form;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class RegistUserForm {
	@NotBlank
	@Length(min=1, max=20)
	private String name;
	@NotBlank
	@Length(min=1, max=20)
	@Pattern(regexp="^[a-zA-z0-9]+$")
	private String password;
	@Email
	private String emailAddress;
}
