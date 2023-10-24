package jp.norinori777.application.service.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.norinori777.application.controller.RegistUser.Model.RegistUser;
import jp.norinori777.infrastructure.datasource.RegistUserMapper;
import jp.norinori777.infrastructure.datasource.RoleMapper;

@Service
@Transactional
public class RegistUserServiceImpl implements RegistUserService {

	@Autowired
	private RegistUserMapper mapper;

	@Autowired
	private RoleMapper roleMapper;
	
	@Override
	public void addUser(RegistUser user) {
		// TODO 権限チェック
		// TODO ユーザー重複チェック

		mapper.insertOne(user);
		roleMapper.insertUserRole(user.getEmailAddress(), user.getRoleId());
	}	
}
