package jp.norinori777.domain.ListUsers.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.ListUsers.service.ListUserService;
import jp.norinori777.domain.user.model.User;
import jp.norinori777.repository.ListUserMapper;

@Service
public class ListUsersServiceImpl implements ListUserService {
	
	@Autowired
	private ListUserMapper mapper;

	@Override
	public List<User> getUsers() {
		List<User> users = mapper.selectUsers();
		return users;
	}
}
