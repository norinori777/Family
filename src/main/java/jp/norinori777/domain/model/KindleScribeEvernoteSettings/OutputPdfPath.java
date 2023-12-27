package jp.norinori777.domain.model.KindleScribeEvernoteSettings;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class OutputPdfPath {
    private final Integer id;
    @NotNull
    @Pattern(regexp = "^[a-zA-Z]$", message = "Only single alphabet characters are allowed")
    private final String initial;
    @NotNull
    @Pattern(regexp = "^[a-zA-Z0-9-_\\\\\\:]+$", message = "Invalid directory path")
    private final String path;

    public OutputPdfPath(Integer id, String initial, String path) {
        if(id == null) throw new IllegalArgumentException("id is null");
        if(initial == null || initial.isEmpty()) throw new IllegalArgumentException("inital is empty");
        if(initial.length() != 1) throw new IllegalArgumentException("inital is not 1 character");
        if(path == null || path.isEmpty()) throw new IllegalArgumentException("path is empty");

        this.id = id;
        this.initial = initial;
        this.path = path;
    }
}