package jp.norinori777.domain.user;

import lombok.Data;

@Data
public class Name {
	private String name;
	
	public Name(String name) throws Exception {
		if(name.length() > 20) {
			throw new Exception("Name must be 20 characters or less");
		}
		this.name = name;
	}
}
