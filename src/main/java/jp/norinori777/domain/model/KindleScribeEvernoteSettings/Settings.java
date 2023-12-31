package jp.norinori777.domain.model.KindleScribeEvernoteSettings;

import java.util.List;

public class Settings {
    private final List<ViewerSetting> settings;

    public Settings(List<ViewerSetting> settings) {
        this.settings = settings;
    }

    
    public String get(String name){
        // 設定値がない場合、空文字を返す
        ViewerSetting setting = settings.stream().filter(s -> s.getName().equals(name)).findFirst().orElse(new ViewerSetting(name, ""));
        return setting.getValue();
    }
}