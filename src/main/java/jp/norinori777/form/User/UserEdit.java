package jp.norinori777.form.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserEdit {
    @NotBlank
    @Size(min=1, max=20)
    private String name;

    @NotBlank
    @Size(min=3, max=255)  
    @Email  
    private String emailAddress;

    @NotBlank
    @Size(min=3, max=255)
    @Email
    private String beforeEmailAddress;

    @Min(1)
    private Integer version;

    public static UserEdit create(String name, String emailAddress, String beforeEmailAddress, Integer version) {
        UserEdit userEdit = new UserEdit();
        userEdit.setName(name);
        userEdit.setEmailAddress(emailAddress);
        userEdit.setBeforeEmailAddress(beforeEmailAddress);
        userEdit.setVersion(version);
        return userEdit;
    }
}