package jp.norinori777.application.controller.kindleScribeNoteToEvernote;

import org.springframework.web.bind.annotation.RestController;

import jp.norinori777.application.service.KindleScribeNoteToEvernote.SettingService;
import jp.norinori777.domain.model.Null.NullData;
import jp.norinori777.domain.model.Rest.RestResponse;
import jp.norinori777.domain.model.Rest.RestResult;
import jp.norinori777.form.KindleScribeEvernoteSetting.KindleScribeEvernoteSettings;
import jp.norinori777.util.FormErrorMessage;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/kindleScribeNoteToEvernote")
@Slf4j
public class SettingRestController {
    @Autowired
    private SettingService settingService;

    @Autowired
    MessageSource messageSource;
    
    @GetMapping("/setting")
    public ResponseEntity<RestResult<KindleScribeEvernoteSettings>> getSettings(){
        RestResponse<KindleScribeEvernoteSettings> restResponse;
        try {
            KindleScribeEvernoteSettings kindleScribeEvernoteSettings = settingService.getSettings();
            restResponse = new RestResponse<KindleScribeEvernoteSettings>(0, null, kindleScribeEvernoteSettings, HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            Map<String, String> errors = new HashMap<String, String>();
            errors.put("setting", "設定値の取得に失敗いしました。");
            restResponse = new RestResponse<KindleScribeEvernoteSettings>(99, errors, null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return restResponse.createRestResponse();
    }
    
    @PutMapping("/setting")
    public ResponseEntity<RestResult<NullData>> updateSetting(@Validated @RequestBody KindleScribeEvernoteSettings kindleScribeEvernoteSettings, BindingResult bindingResult, Locale locale){
        RestResponse<NullData> restResponse;
        try {
            settingService.setSetting(kindleScribeEvernoteSettings);
            restResponse = new RestResponse<NullData>(0, null, null, HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            FormErrorMessage formErrorMessage = new FormErrorMessage(messageSource, bindingResult, locale);
            Map<String, String> errors = formErrorMessage.getErrorMessages();

            //TODO: エラーメッセージの取得方法変更する
            errors.put("setting", "設定値の更新に失敗いしました。");
            restResponse = new RestResponse<NullData>(99, errors, null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return restResponse.createRestResponse();
    }


}
