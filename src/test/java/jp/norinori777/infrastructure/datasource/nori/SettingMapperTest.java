package jp.norinori777.infrastructure.datasource.nori;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlConfig;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.domain.model.KindleScribeEvernoteSettings.Setting;
import jp.norinori777.infrastructure.mapper.nori.ListSettings;


@Sql(scripts = "KindleScribeEvernoteSettingTest.sql", config=@SqlConfig(transactionManager="noriTransactionManager"))
@Transactional
@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class SettingMapperTest {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    private ListSettings listSettings;

    private List<Setting> settings;

    @Test
    public void 設定値を取得できること(){
        settings = listSettings.selectSettings();
        
        assertEquals(5, settings.size());
    }
}
