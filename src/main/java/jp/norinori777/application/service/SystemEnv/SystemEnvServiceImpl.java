package jp.norinori777.application.service.SystemEnv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.SystemEnv.SystemEnv;
import jp.norinori777.infrastructure.mapper.chat.SystemEnvMapper;

@Service
public class SystemEnvServiceImpl implements SystemEnvService {
    @Autowired
    private SystemEnvMapper systemEnvMapper;

    @Override
    public SystemEnv getSystemEnv(String key) {
        return systemEnvMapper.selectSystemEnv(key);
    }
}