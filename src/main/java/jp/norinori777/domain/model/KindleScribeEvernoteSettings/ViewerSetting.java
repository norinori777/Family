package jp.norinori777.domain.model.KindleScribeEvernoteSettings;

import java.util.Optional;

import lombok.Data;

@Data
public class ViewerSetting {
    private final String name;
    private final String value;

    public ViewerSetting(String name, String value) {
        this.name = name;
        this.value = Optional.ofNullable(value).orElse("");
    }
}


