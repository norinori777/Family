package jp.norinori777.application.controller.ChatRoom;

import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

import jp.norinori777.application.service.ChatRoom.ListRoomMembersService;
import jp.norinori777.domain.model.Login.LoginUserService;
import jp.norinori777.domain.model.Null.NullData;
import jp.norinori777.domain.model.Rest.RestResponse;
import jp.norinori777.domain.model.Rest.RestResult;
import jp.norinori777.domain.model.Room.ListChatRoomsService;
import jp.norinori777.domain.model.Room.RegistRoom;
import jp.norinori777.domain.model.Room.RegistRoomService;
import jp.norinori777.domain.model.Room.Room;
import jp.norinori777.domain.model.User.ChatRoomMemberUser;
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
    private ListRoomMembersService listRoomMembersService;

    @Autowired
    private LoginUserService loginUserService;

    @Autowired
    private MessageSource messageSource;
    
    @PostMapping("add")
    public ResponseEntity<RestResult<NullData>> addChatRoom(@Validated @RequestBody RegistRoom registRoom, BindingResult bindingResult, Locale locale) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = getErrorMessages(bindingResult, locale);
            RestResponse<NullData> response = new RestResponse<>(90, errors, null, HttpStatus.BAD_REQUEST);
            return response.createRestResponse();
        }

        // ログインユーザー情報を取得
        UserAccountCredential user = (UserAccountCredential) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();

        User ownerUser = loginUserService.getUser(user.getEmailAddress());
        Integer ownerUserId = ownerUser.getUserId();
        registRoom.setRoomOwnerId(ownerUserId);
        
        try{
            registRoomService.addRoom(registRoom);
        } catch(Exception e) {
            log.error(e.getMessage(), e);
            RestResponse<NullData> response = new RestResponse<>(99, null, null, HttpStatus.INTERNAL_SERVER_ERROR);
            return response.createRestResponse();
        }

        RestResponse<NullData> response = new RestResponse<>(0, null, null, HttpStatus.OK);
        return response.createRestResponse();
    }

    @GetMapping("list")
    public List<Room> listChatRooms() {
        UserAccountCredential loginUser =(UserAccountCredential) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = loginUserService.getUser(loginUser.getEmailAddress());
        Integer userId = user.getUserId();
        List<Room> rooms = listChatRoomsService.getChatRooms(userId);
        return rooms;
    }
    @GetMapping("members/{roomId}")
    public ResponseEntity<RestResult<List<ChatRoomMemberUser>>> listRoomMembers(@PathVariable Integer roomId) {
        RestResponse<List<ChatRoomMemberUser>> response;
        try{
            List<ChatRoomMemberUser>members = listRoomMembersService.getRoomMembers(roomId);
            response = new RestResponse<List<ChatRoomMemberUser>>(0, null, members, HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            response = new RestResponse<List<ChatRoomMemberUser>>(99, null, null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return response.createRestResponse();
    }


    private Map<String, String> getErrorMessages(BindingResult bindingResult, Locale locale){
        Map<String, String> errors = new HashMap<>();
        List<FieldError> fieldErrors = bindingResult.getFieldErrors();
        for (FieldError error : fieldErrors) {
            String message = messageSource.getMessage(error, locale);
            errors.put(error.getField(), message);
        }
        return errors;
    }
}
