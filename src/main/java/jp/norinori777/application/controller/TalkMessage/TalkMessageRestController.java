package jp.norinori777.application.controller.TalkMessage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.norinori777.domain.model.Message.TalkMessage;
import jp.norinori777.domain.model.Message.TalkMessageService;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/talkmessage")
@Slf4j
public class TalkMessageRestController {
    @Autowired
    private TalkMessageService talkMessageService;
    
    @GetMapping("list/{roomId}")
    public List<TalkMessage> listTalkMessages(@PathVariable String roomId) {
        List<TalkMessage> talkMessages = talkMessageService.getTalkMessages(Integer.parseInt(roomId));
        return talkMessages;
    }
}