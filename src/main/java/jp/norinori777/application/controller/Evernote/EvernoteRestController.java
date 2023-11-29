package jp.norinori777.application.controller.Evernote;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.evernote.clients.NoteStoreClient;
import com.evernote.edam.type.Notebook;

import jp.norinori777.application.service.Evernote.EvernoteLoginService;
import jp.norinori777.domain.model.Evernote.EvernoteAccessTokenSession;
import jp.norinori777.domain.model.Rest.RestResponse;
import jp.norinori777.domain.model.Rest.RestResult;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/cycledo")
@Slf4j
public class EvernoteRestController {
    @Autowired
    private EvernoteLoginService evernoteLoginService;

    @Autowired
    private EvernoteAccessTokenSession evernoteAccessTokenSession;

    @GetMapping("list")
    public ResponseEntity<RestResult<List<Notebook>>> getNotes() throws Exception {
        try{
            if(!evernoteAccessTokenSession.hasAccessToken()) {
                evernoteAccessTokenSession.setAccessToken(evernoteLoginService.accessToken());
            }
            NoteStoreClient noteStoreClient = evernoteLoginService.createNoteStore(evernoteAccessTokenSession.getAccessToken());
            List<Notebook> notebooks = noteStoreClient.listNotebooks();           
            RestResponse<List<Notebook>> response =  new RestResponse<List<Notebook>>(0, null, notebooks, HttpStatus.OK);
            return response.createRestResponse(); 
        } catch(Exception e) {
            log.error(e.getMessage(), e);
            RestResponse<List<Notebook>> response = new RestResponse<>(99, null, null, HttpStatus.INTERNAL_SERVER_ERROR);
            return response.createRestResponse();
        }
    }

}
