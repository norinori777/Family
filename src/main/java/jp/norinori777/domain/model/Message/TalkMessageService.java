package jp.norinori777.domain.model.Message;

import java.util.List;

public interface TalkMessageService {
    public void addTalkMessage(TalkMessage message);

    public void deleteTalkMessage(Integer message_id);

    public List<TalkMessage> getTalkMessages(Integer room_id);
    
}