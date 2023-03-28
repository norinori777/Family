package jp.norinori777;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class KawaiFamilyApplication {
	
	@Configuration
	@EnableWebSocketMessageBroker
	public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

	    @Override
	    public void configureMessageBroker(MessageBrokerRegistry config) {
	        config.enableSimpleBroker("/receive");
	        config.setApplicationDestinationPrefixes("/send");
	    }

	    @Override
	    public void registerStompEndpoints(StompEndpointRegistry registry) {
	        registry.addEndpoint("/test").withSockJS();
	    }

	}

	public static void main(String[] args) {
		SpringApplication.run(KawaiFamilyApplication.class, args);
	}

}
