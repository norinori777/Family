package jp.norinori777.domain.model.SystemEnv;

import lombok.Data;

@Data
public class SystemEnv {
    private int id;
    private String key;
    private String value;
    private String createAt;
    private String updateAt; 
}
