package jp.norinori777.application.controller;
import java.io.IOException;
import java.time.LocalTime;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import jp.norinori777.domain.user.model.TalkMessage;
import jp.norinori777.domain.user.model.UserAccountCredential;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class WebSocketController {

    @MessageMapping("/message")
    @SendTo("/topic/messages")
    public String sendMessage(String message) throws ClassNotFoundException, IOException {
    	log.info(message);

        UserAccountCredential user = (UserAccountCredential)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        log.info(user.getEmailAddress());
        log.info(user.getPassword());
        LocalTime currentTime = LocalTime.now();


        ObjectMapper mapper = new ObjectMapper();
        TalkMessage returnMessage = mapper.readValue(message, TalkMessage.class);

        returnMessage.setSpeaker(user.getEmailAddress());
        returnMessage.setDate(currentTime.toString());

        return mapper.writeValueAsString(returnMessage);
    }  
}
