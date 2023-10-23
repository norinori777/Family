package jp.norinori777.application.service.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.application.controller.RegistUser.Model.RegistUser;
import jp.norinori777.infrastructure.datasource.RegistUserMapper;

@Service
public class RegistUserServiceImpl implements RegistUserService {

	@Autowired
	private RegistUserMapper mapper;
	
	@Override
	public void addUser(RegistUser user) {
		mapper.insertOne(user);
	}	
}
