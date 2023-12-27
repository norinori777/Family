package jp.norinori777.application.service.KindleScribeNoteToEvernote;

import jp.norinori777.form.KindleScribeEvernoteSetting.KindleScribeEvernoteSettings;

public interface SettingService {
    public KindleScribeEvernoteSettings getSettings();

    public void setSetting(KindleScribeEvernoteSettings kindleScribeEvernoteSettings);
}
