package jp.norinori777.aop;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Aspect
@Component
@Slf4j
public class ErrorAspect {
    @AfterThrowing(value="execution(* jp.norinori777.application.*.*.*(..))&&" + "(bean(*Controller) || bean(*Service) || bean(*Repository))", throwing="ex")
    public void throwingNullPointer(NullPointerException ex) {
        log.error("NullPointerExceptionが発生しました。", ex);
    }
}
