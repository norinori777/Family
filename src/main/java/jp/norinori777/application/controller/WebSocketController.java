package jp.norinori777.application.controller;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;

import jp.norinori777.domain.user.model.UserAccountCredential;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class WebSocketController {

    @MessageMapping("/message")
    @SendTo("/topic/messages")
    public String sendMessage(String message) {
    	log.info(message);

        UserAccountCredential user = (UserAccountCredential)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        log.info(user.getEmailAddress());
        log.info(user.getPassword());

        return message;
    }


}
