package jp.norinori777.application.service.SystemEnv;

import jp.norinori777.domain.model.SystemEnv.SystemEnv;

public interface SystemEnvService {
    public SystemEnv getSystemEnv(String key);
}