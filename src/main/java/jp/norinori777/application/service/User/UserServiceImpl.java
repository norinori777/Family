package jp.norinori777.application.service.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.User.User;
import jp.norinori777.domain.model.User.UserService;
import jp.norinori777.repository.UserMapper;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserMapper mapper;
    
    @Override
    public User getUser(String emailAddress) {
        return mapper.selectUser(emailAddress);
    }
}