package jp.norinori777.application.controller.ChatRoom;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import jp.norinori777.application.controller.Rest.Model.RestResult;
import jp.norinori777.domain.model.Login.LoginUserService;
import jp.norinori777.domain.model.Room.ListChatRoomsService;
import jp.norinori777.domain.model.Room.RegistRoomService;
import jp.norinori777.domain.model.Room.Room;
import jp.norinori777.domain.model.User.User;
import jp.norinori777.domain.model.User.UserAccountCredential;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/chatroom")
@Slf4j
public class ChatRoomRestController {

    @Autowired
    private RegistRoomService registRoomService;

    @Autowired
    private ListChatRoomsService listChatRoomsService;

    @Autowired
    private LoginUserService loginUserService;
    
    @PostMapping("add")
    public RestResult addChatRoom(@Validated RegistRoom registRoom, BindingResult bindingResult, Locale locale) {
        if (bindingResult.hasErrors()) {
            return new RestResult(90, bindingResult, locale);
        }
        UserAccountCredential user = (UserAccountCredential) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();

        User ownerUser = loginUserService.getUser(user.getEmailAddress());
        Integer ownerUserId = ownerUser.getUserId();
        registRoom.setRoomOwnerId(ownerUserId);
        
        registRoomService.addRoom(registRoom);

        return new RestResult(0, bindingResult, locale);
    }

    @GetMapping("list")
    public List<Room> listChatRooms() {
        UserAccountCredential loginUser =(UserAccountCredential) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = loginUserService.getUser(loginUser.getEmailAddress());
        Integer userId = user.getUserId();
        List<Room> rooms = listChatRoomsService.getRooms(userId);
        return rooms;
    }
}
