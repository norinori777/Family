package jp.norinori777;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class KawaiFamilyApplication {

	public static void main(String[] args) {
		SpringApplication.run(KawaiFamilyApplication.class, args);
	}

}
