package jp.norinori777.infrastructure.datasource;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.Role.MasterRole;

@Mapper
public interface RoleMapper {
    public List<MasterRole> selectMasterRoles();

    public void insertUserRole(String emailAddress, String roleId);
}