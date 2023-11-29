package jp.norinori777.application.service.Evernote;

import com.evernote.clients.NoteStoreClient;
import com.evernote.thrift.transport.TTransportException;
import com.github.scribejava.core.model.OAuth1AccessToken;

public interface EvernoteLoginService {
    public String consumerKey();
    public String consumerSecret();
    public String loginUrl();
    public OAuth1AccessToken accessToken() throws Exception;
    public NoteStoreClient createNoteStore(OAuth1AccessToken accessToken) throws TTransportException, Exception;
}