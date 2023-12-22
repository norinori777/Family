package jp.norinori777.infrastructure.mapper.chat;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import jp.norinori777.domain.model.SystemEnv.SystemEnv;

@Mapper
public interface SystemEnvMapper {
    public SystemEnv selectSystemEnv(@Param("key")String key);
}