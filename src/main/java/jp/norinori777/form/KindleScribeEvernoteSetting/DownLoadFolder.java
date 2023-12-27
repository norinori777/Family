package jp.norinori777.form.KindleScribeEvernoteSetting;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class DownLoadFolder {
    
    private Integer id;

    @NotNull
    @Pattern(regexp = "^[a-zA-Z]$", message = "Only single alphabet characters are allowed")
    private String initial;

    @NotNull
    @Pattern(regexp = "^[a-zA-Z0-9-_\\\\\\:]+$", message = "Invalid directory path")
    private String path;
}
