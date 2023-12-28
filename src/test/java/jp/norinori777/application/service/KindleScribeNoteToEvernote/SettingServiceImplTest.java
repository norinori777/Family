package jp.norinori777.application.service.KindleScribeNoteToEvernote;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import jp.norinori777.domain.model.KindleScribeEvernoteSettings.OutputPdfPath;
import jp.norinori777.domain.model.KindleScribeEvernoteSettings.Setting;
import jp.norinori777.form.KindleScribeEvernoteSetting.KindleScribeEvernoteSettings;
import jp.norinori777.infrastructure.mapper.nori.OutputPdfPathMapper;
import jp.norinori777.infrastructure.mapper.nori.SettingsMapper;

@ExtendWith(MockitoExtension.class)
public class SettingServiceImplTest {

    @Mock
    private SettingsMapper settingsMapper;

    @Mock
    private OutputPdfPathMapper outputPdfPathMapper;

    @InjectMocks
    private SettingServiceImpl settingService;

    @Test
    public void testGetSettings() {
        // Arrange
        List<Setting> settings = new ArrayList();
        settings.add(new Setting("application_name", "b"));
        settings.add(new Setting("credentials_json", "d"));
        settings.add(new Setting("tokens_directory_path", "f"));
        settings.add(new Setting("mail_user_id", "h"));
        settings.add(new Setting("sender_mail", "j"));

        when(settingsMapper.selectSettings()).thenReturn(settings);

        List<OutputPdfPath> outputPdfPaths = new ArrayList();

        outputPdfPaths.add(new OutputPdfPath(1,"a", "b"));
        outputPdfPaths.add(new OutputPdfPath(2,"c", "d"));
        outputPdfPaths.add(new OutputPdfPath(3,"e", "f"));

        when(outputPdfPathMapper.selectOutputPdfPaths()).thenReturn(outputPdfPaths);

        // Act
        KindleScribeEvernoteSettings result = settingService.getSettings();

        // Assert
        assertEquals(result.getApplicationName(), "b");
        assertEquals(result.getCredentialsJson(), "d");
        assertEquals(result.getTokensDirectoryPath(), "f");
        assertEquals(result.getMailUserId(), "h");
        assertEquals(result.getSenderMail(), "j");
        assertEquals(result.getOutputPdfPaths().get(0).getId(), 1);
        assertEquals(result.getOutputPdfPaths().get(1).getId(), 2);
        assertEquals(result.getOutputPdfPaths().get(2).getId(),3);
        assertEquals(result.getOutputPdfPaths().get(0).getInitial(), "a");
        assertEquals(result.getOutputPdfPaths().get(1).getInitial(), "c");
        assertEquals(result.getOutputPdfPaths().get(2).getInitial(), "e");
        assertEquals(result.getOutputPdfPaths().get(0).getPath(), "b");
        assertEquals(result.getOutputPdfPaths().get(1).getPath(), "d");
        assertEquals(result.getOutputPdfPaths().get(2).getPath(), "f");
        verify(settingsMapper, times(1)).selectSettings();
        verify(outputPdfPathMapper, times(1)).selectOutputPdfPaths();
    }

    // @Test
    // public void バッチ設定値が取得がNULLだった場合例外が発生すること() {
    //     when(settingsMapper.selectSettings()).thenReturn(null);

    //     Exception exception = assertThrows(IllegalArgumentException.class, () -> {
    //         settingService.getSettings();
    //     });

    //     assertEquals("settings is null", exception.getMessage());
    //     verify(settingsMapper, times(1)).selectSettings();
    //     verify(outputPdfPathMapper, times(0)).selectOutputPdfPaths();
    // }

    // @Test
    // public void バッチ設定値が取得が空だった場合例外が発生すること() {
    //     when(settingsMapper.selectSettings()).thenReturn(new ArrayList());

    //     Exception exception = assertThrows(IllegalArgumentException.class, () -> {
    //         settingService.getSettings();
    //     });

    //     assertEquals("settings is empty", exception.getMessage());
    //     verify(settingsMapper, times(1)).selectSettings();
    //     verify(outputPdfPathMapper, times(0)).selectOutputPdfPaths();
    // }
}
