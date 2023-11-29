package jp.norinori777.infrastructure.datasource;

import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;


import jp.norinori777.domain.model.Role.MasterRole;
import jp.norinori777.infrastructure.datasource.chat.RoleMapper;

// @Sql("RoleMapperTest.sql")
@Transactional
@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class RoleMapperTest {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    private RoleMapper roleMapper;

    private List<MasterRole> roles;

    @Test
    public void test_selectMasterRoles() {
        roles = roleMapper.selectMasterRoles();

        assertEquals(2, roles.size());

        MasterRole adminRole = roles.get(0);
        assertEquals("admin", adminRole.getRoleId());
        assertEquals("ROLE_ADMIN", adminRole.getRoleName());

        MasterRole generalRole = roles.get(1);
        assertEquals("general", generalRole.getRoleId());
        assertEquals("ROLE_GENERAL", generalRole.getRoleName());
    }

    @Test
    public void ユーザーロールを登録する(){
        roleMapper.insertUserRole("hoge@gmail.com", "general");
        Map<String, Object> userMap = jdbcTemplate.queryForMap("SELECT * FROM t_user_role WHERE email_address = ?", "hoge@gmail.com");
        assertEquals("hoge@gmail.com", userMap.get("email_address"));
        assertEquals("general", userMap.get("role_id"));

    }    
}