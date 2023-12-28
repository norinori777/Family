package jp.norinori777.application.controller.KindleScribeNoteToEvernote;

import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

import jp.norinori777.application.controller.kindleScribeNoteToEvernote.SettingRestController;
import jp.norinori777.application.service.KindleScribeNoteToEvernote.SettingService;
import jp.norinori777.domain.model.KindleScribeEvernoteSettings.OutputPdfPath;
import jp.norinori777.form.KindleScribeEvernoteSetting.KindleScribeEvernoteSettings;

@WebMvcTest(value = SettingRestController.class, excludeAutoConfiguration = {SecurityAutoConfiguration.class})
public class SettingRestControllerTest {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SettingService settingService;

    @Test
    public void settingリクエストのレスポンス確認() throws Exception {
        List<OutputPdfPath> outputPdfPaths = new ArrayList();
        outputPdfPaths.add(new OutputPdfPath(1,"a", "b"));
        outputPdfPaths.add(new OutputPdfPath(2,"c", "d"));
        outputPdfPaths.add(new OutputPdfPath(3,"e", "f"));

        KindleScribeEvernoteSettings kindleScribeEvernoteSettings = new KindleScribeEvernoteSettings();
        kindleScribeEvernoteSettings.setApplicationName("a");
        kindleScribeEvernoteSettings.setCredentialsJson("b");
        kindleScribeEvernoteSettings.setTokensDirectoryPath("c");
        kindleScribeEvernoteSettings.setMailUserId("d");
        kindleScribeEvernoteSettings.setSenderMail("e");
        kindleScribeEvernoteSettings.setOutputPdfPaths(outputPdfPaths);

        when(settingService.getSettings()).thenReturn(kindleScribeEvernoteSettings);

        mockMvc.perform(get("/kindleScribeNoteToEvernote/setting"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.result").value(0))
                .andExpect(jsonPath("$.errors").isEmpty())
                .andExpect(jsonPath("$.data.applicationName").value("a"))
                .andExpect(jsonPath("$.data.outputPdfPaths[0].initial").value("a"));
    }

    @Test
    public void settingリクエスト時の例外発生時のレスポンス確認() throws Exception {
        doThrow(IllegalArgumentException.class).when(settingService).getSettings();

        mockMvc.perform(get("/kindleScribeNoteToEvernote/setting"))
                .andExpect(status().isInternalServerError())
                .andExpect(jsonPath("$.result").value(99))
                .andExpect(jsonPath("$.errors['setting']").value("設定値の取得に失敗いしました。"))
                .andExpect(jsonPath("$.data").isEmpty());
   }

   @Test
   public void setting更新リクエストのレスポンス確認() throws Exception{
        List<OutputPdfPath> outputPdfPaths = new ArrayList();
        outputPdfPaths.add(new OutputPdfPath(1,"a", "b"));
        outputPdfPaths.add(new OutputPdfPath(2,"c", "d"));
        outputPdfPaths.add(new OutputPdfPath(3,"e", "f"));

        KindleScribeEvernoteSettings kindleScribeEvernoteSettings = new KindleScribeEvernoteSettings();
        kindleScribeEvernoteSettings.setApplicationName("a");
        kindleScribeEvernoteSettings.setCredentialsJson("b");
        kindleScribeEvernoteSettings.setTokensDirectoryPath("c");
        kindleScribeEvernoteSettings.setMailUserId("hoge@hoge.co.jp");
        kindleScribeEvernoteSettings.setSenderMail("mege@mege.co.jp");
        kindleScribeEvernoteSettings.setOutputPdfPaths(outputPdfPaths);
    
        String requestBody = objectMapper.writeValueAsString(kindleScribeEvernoteSettings);
    
         mockMvc.perform(put("/kindleScribeNoteToEvernote/setting")
                .contentType("application/json")
                .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.result").value(0))
                .andExpect(jsonPath("$.errors").isEmpty())
                .andExpect(jsonPath("$.data").isEmpty());
   }

    @Test
    public void setting更新リクエストのValidation確認() throws Exception{
        List<OutputPdfPath> outputPdfPaths = new ArrayList();
        outputPdfPaths.add(new OutputPdfPath(1,"a", "b"));
        outputPdfPaths.add(new OutputPdfPath(2,"c", "d"));
        outputPdfPaths.add(new OutputPdfPath(3,"e", "f"));

        KindleScribeEvernoteSettings kindleScribeEvernoteSettings = new KindleScribeEvernoteSettings();
        kindleScribeEvernoteSettings.setApplicationName("a");
        kindleScribeEvernoteSettings.setCredentialsJson("b");
        kindleScribeEvernoteSettings.setTokensDirectoryPath("c");
        kindleScribeEvernoteSettings.setMailUserId("@hoge.co.jp");
        kindleScribeEvernoteSettings.setSenderMail("mege@mege.co.jp");
        kindleScribeEvernoteSettings.setOutputPdfPaths(outputPdfPaths);
    
        String requestBody = objectMapper.writeValueAsString(kindleScribeEvernoteSettings);

        doThrow(IllegalArgumentException.class).when(settingService).setSetting(kindleScribeEvernoteSettings);

        mockMvc.perform(put("/kindleScribeNoteToEvernote/setting")
                .contentType("application/json")
                .content(requestBody))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.result").value(90))
                .andExpect(jsonPath("$.data").isEmpty());
    }

    @Test
    public void setting更新リクエストの例外確認() throws Exception{
        List<OutputPdfPath> outputPdfPaths = new ArrayList();
        outputPdfPaths.add(new OutputPdfPath(1,"a", "b"));
        outputPdfPaths.add(new OutputPdfPath(2,"c", "d"));
        outputPdfPaths.add(new OutputPdfPath(3,"e", "f"));

        KindleScribeEvernoteSettings kindleScribeEvernoteSettings = new KindleScribeEvernoteSettings();
        kindleScribeEvernoteSettings.setApplicationName("a");
        kindleScribeEvernoteSettings.setCredentialsJson("b");
        kindleScribeEvernoteSettings.setTokensDirectoryPath("c");
        kindleScribeEvernoteSettings.setMailUserId("hoge@hoge.co.jp");
        kindleScribeEvernoteSettings.setSenderMail("mege@mege.co.jp");
        kindleScribeEvernoteSettings.setOutputPdfPaths(outputPdfPaths);
    
        String requestBody = objectMapper.writeValueAsString(kindleScribeEvernoteSettings);

        doThrow(IllegalArgumentException.class).when(settingService).setSetting(kindleScribeEvernoteSettings);

        mockMvc.perform(put("/kindleScribeNoteToEvernote/setting")
                .contentType("application/json")
                .content(requestBody))
                .andExpect(status().isInternalServerError())
                .andExpect(jsonPath("$.result").value(99))
                .andExpect(jsonPath("$.errors['setting']").value("設定値の更新に失敗いしました。"))
                .andExpect(jsonPath("$.data").isEmpty());
    }
}
