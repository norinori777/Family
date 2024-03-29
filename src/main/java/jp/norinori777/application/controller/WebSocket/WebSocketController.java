package jp.norinori777.application.controller.WebSocket;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import jp.norinori777.application.service.User.UserService;
import jp.norinori777.domain.model.Message.ChatMessage;
import jp.norinori777.domain.model.Message.TalkMessage;
import jp.norinori777.domain.model.Message.TalkMessageService;
import jp.norinori777.domain.model.Time.TimeService;
import jp.norinori777.domain.model.User.User;
import jp.norinori777.domain.model.User.UserAccountCredential;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class WebSocketController {

    @Autowired
    UserService userService;

    @Autowired
    TimeService timeService;

    @Autowired
    TalkMessageService talkMessageService;

    @MessageMapping("/{roomId}/message")
    @SendTo("/topic/{roomId}/messages")
    public String sendMessage(@DestinationVariable String roomId, @Payload String message) throws ClassNotFoundException, IOException {
    	log.info(message);
        // 認証情報取得
        UserAccountCredential accountCredential = (UserAccountCredential)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        // ユーザー情報取得
        User user = userService.getUser(accountCredential.getEmailAddress());        
        // 現在時刻取得
        String now = timeService.getNowTimeString();

        ObjectMapper mapper = new ObjectMapper();
        ChatMessage returnMessage = mapper.readValue(message, ChatMessage.class);


        returnMessage.setRoomId(Integer.parseInt(roomId));
        returnMessage.setUserId(user.getUserId());
        returnMessage.setName(user.getName());
        returnMessage.setCreateAt(now);
        returnMessage.setUpdateAt(now);
        
        // TODO: リファクタリング　TDOでデータクラスの作成を簡略化できないか
        TalkMessage talkMessage = new TalkMessage();
        talkMessage.setMessage(returnMessage.getMessage());
        talkMessage.setUserId(user.getUserId());
        talkMessage.setRoomId(Integer.parseInt(roomId));
        talkMessage.setCreateAt(now);
        talkMessage.setUpdateAt(now);

        talkMessageService.addTalkMessage(talkMessage);

        return mapper.writeValueAsString(returnMessage);
    }  
}
