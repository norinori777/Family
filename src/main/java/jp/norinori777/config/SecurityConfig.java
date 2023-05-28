package jp.norinori777.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Profile("production")
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Autowired
    private DataSource dataSource;

    private static final String USER_SQL="SELECT"
        + " user_id,"
        + " password,"
        + " enabled"
        + " FROM"
        + " user_id=?";

    private static final String ROLE_SQL="SELECT"
        + "m_user.user_id,"
        + " role.role_name,"
        + " FROM"
        + " m_user INNER JOIN t_user_role AS user_role"
        + " ON" 
        + " m_user.user_id = user_role.user_id"
        + " INNER JOIN m_role AS role"
        + " ON"
        + " user_role.role_id = role.role_id"
        + " WHERE"
        + " m_user.user_id = ?";

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests()
            .requestMatchers("/login").permitAll()
            .anyRequest().authenticated();

        http.formLogin()
            .loginProcessingUrl("/login")
            .loginPage("/login")
            .failureUrl("/login/error")
            .usernameParameter("userId")
            .passwordParameter("password")
            .defaultSuccessUrl("/hello", true);

        http.logout()
            .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
            .logoutUrl("/logout")
            .logoutSuccessUrl("/login");

        return http.build();
    }

    @Bean
    public UserDetailsManager users() {
        JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
        users.setUsersByUsernameQuery(USER_SQL);
        users.setAuthoritiesByUsernameQuery(ROLE_SQL);
        return users;
    } 
}
