package jp.norinori777.domain.model.Evernote;

import com.github.scribejava.core.builder.api.DefaultApi10a;
import com.github.scribejava.core.model.OAuth1RequestToken;

public class EvernoteApi extends DefaultApi10a {

    private final String apiUrl;

    public EvernoteApi(String apiUrl) {
        this.apiUrl = apiUrl;
    }

    @Override
    public String getRequestTokenEndpoint() {
        return apiUrl + "/oauth";
    }

    @Override
    public String getAccessTokenEndpoint() {
        return apiUrl + "/oauth";
    }

    @Override
    public String getAuthorizationUrl(OAuth1RequestToken requestToken) {
        return apiUrl + "/OAuth.action?oauth_token=" + requestToken.getToken();
    }

    @Override
    protected String getAuthorizationBaseUrl() {
        throw new UnsupportedOperationException("Unimplemented method 'getAuthorizationBaseUrl'");
    }
}