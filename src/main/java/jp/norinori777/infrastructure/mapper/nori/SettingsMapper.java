package jp.norinori777.infrastructure.mapper.nori;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.KindleScribeEvernoteSettings.Setting;

@Mapper
public interface SettingsMapper {
    public List<Setting> selectSettings();

    public int updateSetting(Setting setting);

    public int upsertSetting(Setting setting);
}