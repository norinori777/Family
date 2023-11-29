package jp.norinori777.application.service.Message;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.Message.TalkMessage;
import jp.norinori777.domain.model.Message.TalkMessageService;
import jp.norinori777.infrastructure.datasource.chat.TalkMessageMapper;

@Service
public class TalkMessageServiceImpl implements TalkMessageService {
    
    @Autowired
    private TalkMessageMapper mapper;
    
    @Override
    public List<TalkMessage> getTalkMessages(Integer roomId) {
        return mapper.selectTalkMessages(roomId);
    }
    
    @Override
    public void addTalkMessage(TalkMessage message) {
        mapper.insertTalkMessage(message);
    }
    
    @Override
    public void deleteTalkMessage(Integer roomId) {
        mapper.deleteTalkMessage(roomId);
    }
}