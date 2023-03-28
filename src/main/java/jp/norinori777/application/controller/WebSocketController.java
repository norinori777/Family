package jp.norinori777.application.controller;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.HtmlUtils;

import jp.norinori777.domain.ChatMessage;
import jp.norinori777.domain.ResponseMessage;

@RestController
public class WebSocketController {


    @MessageMapping("/send")
    @SendTo("/receive/response")
    public ResponseMessage greeting(ChatMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new ResponseMessage(HtmlUtils.htmlEscape(message.getName())
                + " : "
                + HtmlUtils.htmlEscape(message.getMessage()) );
    }

}