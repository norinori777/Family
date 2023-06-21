package jp.norinori777.application.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jp.norinori777.domain.user.model.UserAccountCredential;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class HelloWorld {
    @GetMapping("/hello")
    public String getHello(@AuthenticationPrincipal UserAccountCredential user){
        log.info(user.getUsername());
        return "hello";
    }
}
