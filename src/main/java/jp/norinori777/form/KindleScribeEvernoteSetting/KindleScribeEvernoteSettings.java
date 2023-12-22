package jp.norinori777.form.KindleScribeEvernoteSetting;

import java.util.List;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class KindleScribeEvernoteSettings {
    @NotNull
    @Length(min = 1, max = 100)
    private String applicationName;
    @NotBlank
    @Length(min = 1, max = 2046)
    private String credentialsJson;
    @NotBlank
    @Pattern(regexp = "^[a-zA-Z0-9-_\\\\\\:]+$", message = "Invalid directory path")
    private String tokensDirectoryPath;
    @NotBlank
    @Email
    private String mail_user_id;
    @NotBlank
    @Email
    private String sender_mail;
    @NotBlank
    private List<DownLoadFolder> downloadFolders;
}
