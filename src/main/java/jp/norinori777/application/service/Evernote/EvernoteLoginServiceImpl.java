package jp.norinori777.application.service.Evernote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evernote.auth.EvernoteAuth;
import com.evernote.auth.EvernoteService;
import com.evernote.clients.ClientFactory;
import com.evernote.clients.NoteStoreClient;
import com.evernote.thrift.transport.TTransportException;
import com.github.scribejava.core.model.OAuth1AccessToken;

import jp.norinori777.application.service.SystemEnv.SystemEnvService;
import jp.norinori777.domain.model.Evernote.EvernoteConnectionInformation;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class EvernoteLoginServiceImpl implements EvernoteLoginService {
    // TODO: Literalを定数化する
    @Autowired
    private SystemEnvService systemEnvService;

    @Override
    public String consumerKey() {
        return systemEnvService.getSystemEnv("evernote_consumer_key").getValue();
    }

    @Override
    public String consumerSecret() {
        return systemEnvService.getSystemEnv("evernote_consumer_secret").getValue();
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
            final String callbackUrl = "http://localhost:8080/CycleDo";

            EvernoteConnectionInformation connectionInformation = new EvernoteConnectionInformation(evernoteKey, evernoteSecret, evernoteService, callbackUrl);
            OAuth1AccessToken accessToken = connectionInformation.getAccessToken();
            return accessToken;
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public NoteStoreClient createNoteStore(OAuth1AccessToken accessToken) throws TTransportException, Exception {
        try{
            EvernoteAuth evernoteAutnh = new EvernoteAuth(EvernoteService.SANDBOX, accessToken.getToken());
            ClientFactory clientFactory = new ClientFactory(evernoteAutnh);
            NoteStoreClient noteStoreClient = clientFactory.createNoteStoreClient();
            return noteStoreClient;
            // TODO: ここで例外をキャッチして、クオリティを上げる例外を投げる
        } catch (TTransportException e) {
            throw e;
        } catch (Exception e) {
            throw e;
        }
    }
}