package jp.norinori777.config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;

import jakarta.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .exceptionHandling(handling -> handling.authenticationEntryPoint((request, response, authException) -> response.sendError(HttpServletResponse.SC_UNAUTHORIZED)))
                .formLogin(login -> login
                                .loginProcessingUrl("/login")
                                .loginPage("/login")
                                .defaultSuccessUrl("/ChatRoom", true)
                                .failureUrl("/login/error")
                                .permitAll()
                ).logout(logout -> logout.logoutSuccessUrl("/login")
        ).headers(headers -> headers.frameOptions().sameOrigin()
        ).authorizeHttpRequests(authz -> authz
                        .requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
                        .requestMatchers("/").permitAll()
                        .requestMatchers("/general").hasRole("GENERAL")
                        .requestMatchers("/admin").hasRole("ADMIN")
                        .anyRequest().authenticated()
        ).csrf(csrf -> csrf.csrfTokenRepository(new HttpSessionCsrfTokenRepository())
        ).sessionManagement(sessionManagement -> sessionManagement.invalidSessionUrl("/login"));

        return http.build();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
