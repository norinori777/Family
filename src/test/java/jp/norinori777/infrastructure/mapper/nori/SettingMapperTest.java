package jp.norinori777.infrastructure.mapper.nori;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlConfig;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.config.NoriDataSourceConfig;
import jp.norinori777.domain.model.KindleScribeEvernoteSettings.Setting;


// @SpringBootTest
@MybatisTest
@Sql(scripts = "KindleScribeEvernoteSettingTest.sql", 
    config = @SqlConfig(
        dataSource = "noriDataSource",
        transactionManager = "noriTransactionManager",
        transactionMode = SqlConfig.TransactionMode.INFERRED,
        errorMode = SqlConfig.ErrorMode.FAIL_ON_ERROR))
@Transactional("noriTransactionManager")
@ContextConfiguration(classes = {NoriDataSourceConfig.class})
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class SettingMapperTest {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    private SettingsMapper mapper;

    private List<Setting> settings;

    @Test
    public void 設定値を取得できること(){
        settings = mapper.selectSettings();
        
        assertEquals(5, settings.size());
    }

    @Test
    public void 設定値を更新できること(){
        Setting setting = new Setting("TOKENS_DIRECTORY_PATH", "./hoge");
        int result = mapper.updateSetting(setting);

        assertEquals(1, result);

        Map<String, Object> settingMap = jdbcTemplate.queryForMap("SELECT * FROM m_settings WHERE name = ?", "TOKENS_DIRECTORY_PATH");
        assertEquals("./hoge", settingMap.get("value"));
    }
}
