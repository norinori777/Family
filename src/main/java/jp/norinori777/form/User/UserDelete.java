package jp.norinori777.form.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserDelete {
    @NotBlank
    @Size(min=3, max=255)  
    @Email  
    private String emailAddress;
}