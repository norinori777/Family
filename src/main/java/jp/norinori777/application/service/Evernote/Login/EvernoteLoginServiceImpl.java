package jp.norinori777.application.service.Evernote.Login;

import org.springframework.beans.factory.annotation.Autowired;

import com.github.scribejava.core.model.OAuth1AccessToken;

import jp.norinori777.application.service.SystemEnv.SystemEnvService;
import jp.norinori777.domain.model.Evernote.EvernoteConnectionInformation;

public class EvernoteLoginServiceImpl implements EvernoteLoginService {
    @Autowired
    private SystemEnvService systemEnvService;

    @Override
    public String consumerKey() {
        return systemEnvService.getSystemEnv("EVERNOTE_CONSUMER_KEY").getValue();
    }

    @Override
    public String consumerSecret() {
        return systemEnvService.getSystemEnv("EVERNOTE_CONSUMER_SECRET").getValue();
    }

    @Override
    public String loginUrl() {
        return "https://sandbox.evernote.com";
    }

    @Override
    public OAuth1AccessToken accessToken() throws Exception {
        try {
            final String evernoteKey = consumerKey();
            final String evernoteSecret = consumerSecret();
            final String evernoteService = loginUrl();
            final String callbackUrl = "http://localhost:8080/evernote/callback";

            EvernoteConnectionInformation connectionInformation = new EvernoteConnectionInformation(evernoteKey, evernoteSecret, evernoteService, callbackUrl);
            OAuth1AccessToken accessToken = connectionInformation.getAccessToken();
            return accessToken;
        } catch (Exception e) {
            throw e;
        }
    }
}