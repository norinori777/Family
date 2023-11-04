package jp.norinori777.application.controller.ChatRoom;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;
import java.util.List;
import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.MessageSource;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import jp.norinori777.application.service.ChatRoom.ListRoomMembersService;
import jp.norinori777.domain.model.Login.LoginUserService;
import jp.norinori777.domain.model.Room.ListChatRoomsService;
import jp.norinori777.domain.model.Room.RegistRoomService;
import jp.norinori777.domain.model.User.ChatRoomMemberUser;

@WebMvcTest(value = ChatRoomRestController.class, excludeAutoConfiguration = {SecurityAutoConfiguration.class})
public class ListChatRoomMembersRestControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ListRoomMembersService listRoomMembersService;

    @MockBean RegistRoomService registRoomService;

    @MockBean ListChatRoomsService listChatRoomsService;

    @MockBean LoginUserService loginUserService;

    @MockBean MessageSource messageSource;


    @Test
    void チャットルームメンバーの取得ができること() throws Exception {
        List<ChatRoomMemberUser> members = new ArrayList<ChatRoomMemberUser>();
        members.add(new ChatRoomMemberUser(10000, 10000, "aaa", "a@example.com"));
        members.add(new ChatRoomMemberUser(10000, 10001, "bbb", "b@example.com"));
        members.add(new ChatRoomMemberUser(10000, 10002, "ccc", "c@example.com"));
        members.add(new ChatRoomMemberUser(10000, 10003, "ddd", "d@example.com"));

        doReturn(members).when(listRoomMembersService).getRoomMembers(any());

        mockMvc.perform(get("/chatroom/members/100000"))
            .andExpect(status().isOk())
            .andExpect(content().json("{'result':0, 'errors':null, 'data': [{'roomId':10000, 'userId':10000, 'userName':'aaa', 'emailAddress':'a@example.com'},{'roomId':10000, 'userId':10001, 'userName':'bbb', 'emailAddress':'b@example.com'},{'roomId':10000, 'userId':10002, 'userName':'ccc', 'emailAddress':'c@example.com',{'roomId':10000, 'userId':10003, 'userName':'ddd', 'emailAddress':'d@example.com'}}]}"));
    }
}