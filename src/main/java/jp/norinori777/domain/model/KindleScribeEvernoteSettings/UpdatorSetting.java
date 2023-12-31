package jp.norinori777.domain.model.KindleScribeEvernoteSettings;

import lombok.Data;

@Data
public class UpdatorSetting {
    private final String name;
    private final String value;

    public UpdatorSetting(String name, String value) {
        if(name == null || name.isEmpty()) throw new IllegalArgumentException("name is empty");
        if(value == null || value.isEmpty()) throw new IllegalArgumentException("value is empty");

        this.name = name;
        this.value = value;
    }
}


