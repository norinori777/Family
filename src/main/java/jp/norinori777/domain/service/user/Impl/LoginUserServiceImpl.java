package jp.norinori777.domain.service.user.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.service.user.LoginUserService;
import jp.norinori777.domain.user.model.User;
import jp.norinori777.domain.user.model.UserAccountCredential;
import jp.norinori777.repository.LoginUserMapper;

@Service
public class LoginUserServiceImpl implements LoginUserService {

    @Autowired LoginUserMapper mapper;
    
    @Override
    public User getUser(String emailAddress) {
        User user = mapper.selectOne(emailAddress);
        return user;
    }

    @Override
    public List<GrantedAuthority> getUserRoles(String emailAddress) {
        List<String> listAuthority = mapper.getRoleList(emailAddress);

        List<GrantedAuthority> authorities = new ArrayList<>();
        listAuthority.forEach(roleName -> {
            GrantedAuthority authority = new SimpleGrantedAuthority(roleName);
            authorities.add(authority);
        });
        return authorities;
    }

    @Override
    public UserAccountCredential getUserAccountCredential(String emailAddress) {
        User user = getUser(emailAddress);
        List<GrantedAuthority> authorities = getUserRoles(emailAddress);
        UserAccountCredential userDetails = builderUserDetails(user, authorities);
        return userDetails;
    }

    private UserAccountCredential builderUserDetails(User user, List<GrantedAuthority> authorities) {

        new UserAccountCredential();
        UserAccountCredential userDetails = UserAccountCredential.builder()
                .emailAddress(user.getEmailAddress())
                .password(user.getPassword())
                .enabled(user.isEnabled())
                .state(user.getState())
                .loginMissTimes(user.getLoginMissTimes())
                .authorities(authorities)
                .build();
        return userDetails;
    }
}