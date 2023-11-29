package jp.norinori777.application.service.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.application.controller.User.Model.RegistUser;
import jp.norinori777.infrastructure.datasource.chat.RegistUserMapper;
import jp.norinori777.infrastructure.datasource.chat.RoleMapper;

@Service
@Transactional
public class RegistUserServiceImpl implements RegistUserService {

	@Autowired
	private RegistUserMapper mapper;

	@Autowired
	private RoleMapper roleMapper;

	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Override
	public void addUser(RegistUser user) {
		// TODO 権限チェック
		// TODO ユーザー重複チェック
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));

		mapper.insertOne(user);
		roleMapper.insertUserRole(user.getEmailAddress(), user.getRoleId());
	}	
}
