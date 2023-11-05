package jp.norinori777.infrastructure.datasource;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.domain.model.Room.ChatRoomMemberUser;

@Sql("ListRoomMembersMapperTest.sql")
@SpringBootTest
@Transactional
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class ListRoomMembersMapperTest {
    @Autowired
    private ListRoomMembers listRoomMembers;

    @Test
    public void チャットルームメンバーが4件取得できること() {
        List<ChatRoomMemberUser>result = listRoomMembers.selectRoomMembers(100000);
        assert(result.size() == 4);
    }
}
