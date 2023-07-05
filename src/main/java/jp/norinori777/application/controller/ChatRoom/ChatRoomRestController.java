package jp.norinori777.application.controller.ChatRoom;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.norinori777.domain.Rest.RestResult;
import jp.norinori777.domain.Room.model.RegistRoom;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/chatroom")
@Slf4j
public class ChatRoomRestController {

    @PostMapping("add")
    public RestResult addChatRoom(RegistRoom registRoom) {
        log.info(registRoom.toString());
        return new RestResult(0, null);
    }

    @GetMapping("list")
    public RestResult listChatRoom() {
        return new RestResult(0, null);
    }
}
