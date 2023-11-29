// package jp.norinori777.application.controller.CycleDo;

// import static org.mockito.Mockito.doReturn;
// import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
// import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
// import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
// import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
// import org.springframework.boot.test.mock.mockito.MockBean;
// import org.springframework.context.MessageSource;
// import org.springframework.test.web.servlet.MockMvc;

// import jp.norinori777.application.controller.Evernote.EvernoteRestController;
// import jp.norinori777.application.service.Evernote.EvernoteLoginService;
// import jp.norinori777.domain.model.Evernote.EvernoteAccessTokenSession;

// @WebMvcTest(value = EvernoteRestController.class, excludeAutoConfiguration = {SecurityAutoConfiguration.class})
// public class EvernoteRestControllerTest {
//     @Autowired
//     private MockMvc mockMvc;

//     @MockBean
//     private EvernoteLoginService evernoteLoginService;

//     @MockBean
//     private EvernoteAccessTokenSession evernoteAccessTokenSession;

//     @MockBean
//     private MessageSource messageSource;

//     @Test
//     void エバーノートのノートブック一覧を取得できること() throws Exception {
//         mockMvc.perform(get("/CycleDo/list"))
//             .andExpect(status().isOk())
//             .andExpect(content().json("{'result':0, 'errors':null, 'data': [{'guid':'00000000-0000-0000-0000-000000000000', 'name':'ノートブック1', 'updateSequenceNum':0, 'defaultNotebook':false, 'serviceCreated':0, 'serviceUpdated':0, 'publishing':null, 'published':null, 'stack':null, 'sharedNotebookIds':null, 'sharedNotebooks':null, 'businessNotebook':null, 'contact':null, 'restrictions':null, 'recipientSettings':null, 'properties':null, 'setIsDefault':false},{'guid':'00000000-0000-0000-0000-000000000000', 'name':'ノートブック2', 'updateSequenceNum':0, 'defaultNotebook':false, 'serviceCreated':0, 'serviceUpdated':0, 'publishing':null, 'published':null, 'stack':null, 'sharedNotebookIds':null, 'sharedNotebooks':null, 'businessNotebook':null, 'contact':null, 'restrictions':null, 'recipientSettings':null, 'properties':null, 'setIsDefault':false}]}"));
//     }

// }