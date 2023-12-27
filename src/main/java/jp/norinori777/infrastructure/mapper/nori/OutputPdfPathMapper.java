package jp.norinori777.infrastructure.mapper.nori;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.norinori777.domain.model.KindleScribeEvernoteSettings.OutputPdfPath;

@Mapper
public interface OutputPdfPathMapper {
    public List<OutputPdfPath> selectOutputPdfPaths();

    public int insertOutputPdfPath(OutputPdfPath outputPdfPath);

    public int updateOutputPdfPath(OutputPdfPath outputPdfPath);

    public int deleteOutputPdfPath(OutputPdfPath outputPdfPath); 
}