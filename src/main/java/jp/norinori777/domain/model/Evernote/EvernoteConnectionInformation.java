package jp.norinori777.domain.model.Evernote;

import lombok.Data;

import com.github.scribejava.core.builder.ServiceBuilder;
import com.github.scribejava.core.model.OAuth1AccessToken;
import com.github.scribejava.core.model.OAuth1RequestToken;
import com.github.scribejava.core.oauth.OAuth10aService;

@Data
public class EvernoteConnectionInformation {
    private String customerKey;
    private String customerSecret;
    private String evernoteService;
    private String callbackUrl; 
    private String authRedirectUrl;

    public EvernoteConnectionInformation(String customerKey, String customerSecret, String evernoteService, String callbackUrl) {
        this.customerKey = customerKey;
        this.customerSecret = customerSecret;   
        this.evernoteService = evernoteService; // https://sandbox.evernote.com
        this.callbackUrl = callbackUrl; // 認証後に戻ってくるURL

    }

    public OAuth1AccessToken getAccessToken() throws Exception {
        OAuth10aService service = new ServiceBuilder(this.customerKey)
            .apiSecret(this.customerSecret)
            .callback(this.callbackUrl)
            .debug()
            .build(new EvernoteApi(this.evernoteService));;
        try{
            OAuth1RequestToken requestToken = service.getRequestToken();
            String authUrl = service.getAuthorizationUrl(requestToken);
            String oauthVerifier = "OAUTH_VERIFIER_RECEIVED_FROM_CALLBACK";
            OAuth1AccessToken accessToken = service.getAccessToken(requestToken, oauthVerifier);
            return accessToken;
        } catch(Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
}


