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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

import jp.norinori777.domain.model.Login.LoginUserService;
import jp.norinori777.domain.model.Rest.RestResult;
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

    @Autowired
    private MessageSource messageSource;
    
    @PostMapping("add")
    public ResponseEntity<RestResult> addChatRoom(@Validated RegistRoom registRoom, BindingResult bindingResult, Locale locale) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = getErrorMessages(bindingResult, locale);
            ResponseEntity<RestResult> responseEntity = new ResponseEntity<>(new RestResult(90, errors), HttpStatus.BAD_REQUEST);
			return responseEntity;
        }
        UserAccountCredential user = (UserAccountCredential) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();

        User ownerUser = loginUserService.getUser(user.getEmailAddress());
        Integer ownerUserId = ownerUser.getUserId();
        registRoom.setRoomOwnerId(ownerUserId);
        
        registRoomService.addRoom(registRoom);

        ResponseEntity<RestResult> responseEntity = new ResponseEntity<>(new RestResult(0, null), HttpStatus.OK);
		return responseEntity;
    }

    @GetMapping("list")
    public List<Room> listChatRooms() {
        UserAccountCredential loginUser =(UserAccountCredential) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = loginUserService.getUser(loginUser.getEmailAddress());
        Integer userId = user.getUserId();
        List<Room> rooms = listChatRoomsService.getChatRooms(userId);
        return rooms;
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
