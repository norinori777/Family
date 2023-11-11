package jp.norinori777.application.service.Evernote.Login;

import com.github.scribejava.core.model.OAuth1AccessToken;

public interface EvernoteLoginService {
    public String consumerKey();
    public String consumerSecret();
    public String loginUrl();
    public OAuth1AccessToken accessToken() throws Exception;

}