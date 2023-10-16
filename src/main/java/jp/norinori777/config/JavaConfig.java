package jp.norinori777.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("jp.norinori777")
public class JavaConfig {
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
}
