package jp.norinori777.domain.RegistUser.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.RegistUser.RegistUser;
import jp.norinori777.domain.RegistUser.service.RegistUserService;
import jp.norinori777.repository.RegistUserMapper;

@Service
public class RegistUserServiceImpl implements RegistUserService {

	@Autowired
	private RegistUserMapper mapper;
	
	@Override
	public void addUser(RegistUser user) {
		mapper.insertOne(user);
	}	
}
