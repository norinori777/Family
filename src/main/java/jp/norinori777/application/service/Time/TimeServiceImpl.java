package jp.norinori777.application.service.Time;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.Time.TimeService;

@Service
public class TimeServiceImpl implements TimeService {
    public String getNowTimeString() {
        Calendar calendar = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd kk:mm");
        String now = sdf.format(calendar.getTime()).toString();
        return now;
    }
}