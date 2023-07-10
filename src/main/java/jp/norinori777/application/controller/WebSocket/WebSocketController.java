package jp.norinori777.application.controller.WebSocket;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import jp.norinori777.domain.model.Message.TalkMessage;
import jp.norinori777.domain.model.User.UserAccountCredential;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class WebSocketController {

    @MessageMapping("/{roomId}/message")
    @SendTo("/topic/{roomId}/messages")
    public String sendMessage(@DestinationVariable String roomId, @Payload String message) throws ClassNotFoundException, IOException {
    	log.info(message);

        UserAccountCredential user = (UserAccountCredential)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        log.info(user.getEmailAddress());
        log.info(user.getPassword());
        Calendar calendar = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd kk:mm");

        ObjectMapper mapper = new ObjectMapper();
        TalkMessage returnMessage = mapper.readValue(message, TalkMessage.class);

        returnMessage.setSpeaker(user.getEmailAddress());
        returnMessage.setDate(sdf.format(calendar.getTime()).toString());

        return mapper.writeValueAsString(returnMessage);
    }  
}
