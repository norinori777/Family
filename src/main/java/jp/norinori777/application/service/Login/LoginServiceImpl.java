package jp.norinori777.application.service.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.Login.LoginService;
import jp.norinori777.domain.model.Login.LoginUserService;
import jp.norinori777.domain.model.User.User;

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