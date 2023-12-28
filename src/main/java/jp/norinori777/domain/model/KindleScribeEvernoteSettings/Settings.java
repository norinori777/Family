package jp.norinori777.domain.model.KindleScribeEvernoteSettings;

import java.util.List;

public class Settings {
    private final List<Setting> settings;

    public Settings(List<Setting> settings) {
        this.settings = settings;
    }

    public String get(String name){
        Setting setting = settings.stream().filter(s -> s.getName().equals(name)).findFirst().orElseThrow(() -> new IllegalArgumentException("name is not found"));
        return setting.getValue();
    }
}