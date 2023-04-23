package jp.norinori777.domain.user.model;

import java.sql.Date;

import lombok.Data;

@Data
public class User {
	private String name;
	private String emailAddress;
	private Integer state;
	private Date createAt;
	private Date updateAt;
}
