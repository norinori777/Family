package jp.norinori777.application.service.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.norinori777.domain.model.User.User;
import jp.norinori777.infrastructure.datasource.chat.ListUserMapper;

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
