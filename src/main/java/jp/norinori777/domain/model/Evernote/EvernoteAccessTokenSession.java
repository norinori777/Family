package jp.norinori777.domain.model.Evernote;

import java.io.Serializable;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import com.github.scribejava.core.model.OAuth1AccessToken;

@Component
@SessionScope
@SuppressWarnings("serial")
public class EvernoteAccessTokenSession implements Serializable {
    private OAuth1AccessToken accessToken;

    public OAuth1AccessToken getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(OAuth1AccessToken accessToken) {
        this.accessToken = accessToken;
    }

    public void clear() {
        this.accessToken = null;
    }

    public boolean hasAccessToken() {
        return this.accessToken != null;
    }
}
