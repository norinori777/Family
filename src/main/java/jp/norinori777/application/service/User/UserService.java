package jp.norinori777.application.service.User;

import jp.norinori777.domain.model.User.User;

public interface UserService {
    public User getUser(String emailAddress);

    public int updateUser(User user, String emailAddress, Integer version);

    public void deleteUser(String emailAddress);
}