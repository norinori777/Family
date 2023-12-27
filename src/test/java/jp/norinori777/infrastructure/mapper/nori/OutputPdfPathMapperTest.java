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
import jp.norinori777.domain.model.KindleScribeEvernoteSettings.OutputPdfPath;

@MybatisTest
@Sql(scripts = "kindleScribeEvernoteOutputPdfPathTest.sql", 
    config = @SqlConfig(
        dataSource = "noriDataSource",
        transactionManager = "noriTransactionManager",
        transactionMode = SqlConfig.TransactionMode.INFERRED,
        errorMode = SqlConfig.ErrorMode.FAIL_ON_ERROR))
@Transactional("noriTransactionManager")
@ContextConfiguration(classes = {NoriDataSourceConfig.class})
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class OutputPdfPathMapperTest {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    private OutputPdfPathMapper mapper;

    private List<OutputPdfPath> outputPdfPaths;

    @Test
    public void 出力先PDFパスを取得できること(){
        outputPdfPaths = mapper.selectOutputPdfPaths();
        
        assertEquals(3, outputPdfPaths.size());
    }

    @Test
    public void 出力先PDFパスを追加できること(){
        OutputPdfPath outputPdfPath = new OutputPdfPath(1, "h", "C:\\work\\h");
        int result = mapper.insertOutputPdfPath(outputPdfPath);

        assertEquals(1, result);

        Map<String, Object> outputPdfPathMap = jdbcTemplate.queryForMap("SELECT * FROM m_output_pdf_paths WHERE initial = ?", "h");
        assertEquals("C:\\work\\h", outputPdfPathMap.get("path"));
    }

    @Test
    public void 出力先PDFパスを更新できること(){
        Map<String, Object> outputPdfPathMap = jdbcTemplate.queryForMap("SELECT * FROM m_output_pdf_paths WHERE initial = ?", "a");
        OutputPdfPath outputPdfPath = new OutputPdfPath((Integer)outputPdfPathMap.get("id"), "a", "C:\\work\\a");
        int result = mapper.updateOutputPdfPath(outputPdfPath);

        assertEquals(1, result);
    }

    @Test
    public void 出力先PDFパスを削除できること(){
        Map<String, Object> outputPdfPathMap = jdbcTemplate.queryForMap("SELECT * FROM m_output_pdf_paths WHERE initial = ?", "a");
        OutputPdfPath outputPdfPath = new OutputPdfPath((Integer)outputPdfPathMap.get("id"), "a", "C:\\work\\a");
        int result = mapper.deleteOutputPdfPath(outputPdfPath);

        assertEquals(1, result);
    }
}