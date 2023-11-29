package jp.norinori777.application.service.Role;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.Role.MasterRole;
import jp.norinori777.infrastructure.datasource.chat.RoleMapper;

@Service
public class ListMasterRoleServiceImpl implements ListMasterRoleService {
    @Autowired
    private RoleMapper mapper;

    @Override
    public List<MasterRole> getMasterRoles() {
        return mapper.selectMasterRoles();
    }
}