package jp.norinori777.application.service.KindleScribeNoteToEvernote;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.KindleScribeEvernoteSettings.OutputPdfPath;
import jp.norinori777.domain.model.KindleScribeEvernoteSettings.UpdatorSetting;
import jp.norinori777.domain.model.KindleScribeEvernoteSettings.Settings;
import jp.norinori777.form.KindleScribeEvernoteSetting.KindleScribeEvernoteSettings;
import jp.norinori777.infrastructure.mapper.nori.OutputPdfPathMapper;
import jp.norinori777.infrastructure.mapper.nori.SettingsMapper;

@Service
public class SettingServiceImpl implements SettingService {

    @Autowired
    private SettingsMapper settingsMapper;

    @Autowired
    private OutputPdfPathMapper outputPdfPathMapper;

    @Override
    public KindleScribeEvernoteSettings getSettings() {
        try {
            Settings settings = new Settings(settingsMapper.selectSettings());
            List<OutputPdfPath> outputPdfPaths = outputPdfPathMapper.selectOutputPdfPaths();
    
            KindleScribeEvernoteSettings kindleScribeEvernoteSettings = new KindleScribeEvernoteSettings();
            kindleScribeEvernoteSettings.setApplicationName(settings.get("application_name"));
            kindleScribeEvernoteSettings.setCredentialsJson(settings.get("credentials_json"));
            kindleScribeEvernoteSettings.setTokensDirectoryPath(settings.get("tokens_directory_path"));
            kindleScribeEvernoteSettings.setMailUserId(settings.get("mail_user_id"));
            kindleScribeEvernoteSettings.setSenderMail(settings.get("sender_mail"));
            kindleScribeEvernoteSettings.setOutputPdfPaths(outputPdfPaths);

            return kindleScribeEvernoteSettings;
        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public void setSetting(KindleScribeEvernoteSettings kindleScribeEvernoteSettings) {

        try {
            UpdatorSetting applicationName = new UpdatorSetting("application_name", kindleScribeEvernoteSettings.getApplicationName());
            UpdatorSetting credentialsJson = new UpdatorSetting("credentials_json", kindleScribeEvernoteSettings.getCredentialsJson());
            UpdatorSetting tokensDirectoryPath = new UpdatorSetting("tokens_directory_path",
                    kindleScribeEvernoteSettings.getTokensDirectoryPath());
            UpdatorSetting mailUserId = new UpdatorSetting("mail_user_id", kindleScribeEvernoteSettings.getMailUserId());
            UpdatorSetting senderMail = new UpdatorSetting("sender_mail", kindleScribeEvernoteSettings.getSenderMail());
    
            settingsMapper.upsertSetting(applicationName);
            settingsMapper.upsertSetting(credentialsJson);
            settingsMapper.upsertSetting(tokensDirectoryPath);
            settingsMapper.upsertSetting(mailUserId);
            settingsMapper.upsertSetting(senderMail);
    
            kindleScribeEvernoteSettings.getOutputPdfPaths().forEach(outputPdfPath -> {
                outputPdfPathMapper.upsertOutputPdfPath(outputPdfPath);
            }); 
        } catch (Exception e) {
            throw e;
        }
    }
}