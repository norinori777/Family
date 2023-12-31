package jp.norinori777.infrastructure.mapper.nori;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.KindleScribeEvernoteSettings.UpdatorSetting;
import jp.norinori777.domain.model.KindleScribeEvernoteSettings.ViewerSetting;

@Mapper
public interface SettingsMapper {
    public List<ViewerSetting> selectSettings();

    public int updateSetting(UpdatorSetting setting);

    public int upsertSetting(UpdatorSetting setting);
}