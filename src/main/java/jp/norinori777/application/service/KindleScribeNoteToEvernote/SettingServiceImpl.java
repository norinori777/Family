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
            kindleScribeEvernoteSettings.setApplicationName(settings.get("APPLICATION_NAME"));
            kindleScribeEvernoteSettings.setCredentialsJson(settings.get("CREDENTIALS_JSON"));
            kindleScribeEvernoteSettings.setTokensDirectoryPath(settings.get("TOKENS_DIRECTORY_PATH"));
            kindleScribeEvernoteSettings.setMailUserId(settings.get("MAIL_USER_ID"));
            kindleScribeEvernoteSettings.setSenderMail(settings.get("SENDER_EMAIL"));
            kindleScribeEvernoteSettings.setOutputPdfPaths(outputPdfPaths);

            return kindleScribeEvernoteSettings;
        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public void setSetting(KindleScribeEvernoteSettings kindleScribeEvernoteSettings) {

        try {
            UpdatorSetting applicationName = new UpdatorSetting("APPLICATION_NAME", kindleScribeEvernoteSettings.getApplicationName());
            UpdatorSetting credentialsJson = new UpdatorSetting("CREDENTIALS_JSON", kindleScribeEvernoteSettings.getCredentialsJson());
            UpdatorSetting tokensDirectoryPath = new UpdatorSetting("TOKENS_DIRECTORY_PATH",
                    kindleScribeEvernoteSettings.getTokensDirectoryPath());
            UpdatorSetting mailUserId = new UpdatorSetting("MAIL_USER_ID", kindleScribeEvernoteSettings.getMailUserId());
            UpdatorSetting senderMail = new UpdatorSetting("SENDER_EMAIL", kindleScribeEvernoteSettings.getSenderMail());
    
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