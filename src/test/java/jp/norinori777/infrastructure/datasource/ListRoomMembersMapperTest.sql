INSERT INTO m_user (user_id, name, email_address, password, state, enabled, login_miss_times, create_at, update_at) VALUES (100000, 'Taro Yamada', 'yamada@example.com', 'password123', 0, true, 0, now(), now());
INSERT INTO m_user (user_id, name, email_address, password, state, enabled, login_miss_times, create_at, update_at) VALUES (100001, 'Taro Suzuki', 'suzuki@example.com', 'password123', 0, true, 0, now(), now());
INSERT INTO m_user (user_id, name, email_address, password, state, enabled, login_miss_times, create_at, update_at) VALUES (100002, 'Taro Sato', 'sato@example.com', 'password123', 0, true, 0, now(), now());
INSERT INTO m_user (user_id, name, email_address, password, state, enabled, login_miss_times, create_at, update_at) VALUES (100003, 'Taro Saito', 'saito@example.com', 'password123', 0, true, 0, now(), now());
INSERT INTO m_user (user_id, name, email_address, password, state, enabled, login_miss_times, create_at, update_at) VALUES (100004, 'Taro Watanabe', 'watanabe@example.com', 'password123', 0, true, 0, now(), now());
INSERT INTO m_room (room_id, room_name, room_description, room_owner_id, create_at, update_at, state) VALUES (100000, 'Room 1', 'Room 1 Description', 100000, now(), now(), 0);
INSERT INTO t_room_member (member_id, room_id, user_id, state, create_at, update_at) VALUES (100001, 100000, 100001, 0, now(), now());
INSERT INTO t_room_member (member_id, room_id, user_id, state, create_at, update_at) VALUES (100002, 100000, 100002, 0, now(), now());
INSERT INTO t_room_member (member_id, room_id, user_id, state, create_at, update_at) VALUES (100003, 100000, 100003, 0, now(), now());
INSERT INTO t_room_member (member_id, room_id, user_id, state, create_at, update_at) VALUES (100004, 100000, 100004, 0, now(), now());