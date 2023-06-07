package jp.norinori777.domain.service.login.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.service.login.LoginService;
import jp.norinori777.domain.service.user.LoginUserService;
import jp.norinori777.domain.user.model.User;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    LoginUserService userService;

    @Override
    public Boolean isLogin(String emailAddress, String password) {
        User user = userService.getUser(emailAddress);
        if (user == null) {
            return false;
        }
        if(!user.getEmailAddress().equals(emailAddress) || !user.getPassword().equals(password)){
            return false;
        }
        return true;
    }
}