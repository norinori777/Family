package jp.norinori777.application.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloWorld {
    @GetMapping("/hello")
    public String getHello(){
        return "hello";
    }
}
