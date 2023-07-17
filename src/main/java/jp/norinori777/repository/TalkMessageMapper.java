package jp.norinori777.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.Message.TalkMessage;

@Mapper
public interface TalkMessageMapper {
    public void insertTalkMessage(TalkMessage message);

    public void deleteTalkMessage(Integer message_id);

    public List<TalkMessage> selectTalkMessages(Integer room_id);
    
}