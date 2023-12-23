package jp.norinori777.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@MapperScan(basePackages={"jp.norinori777.infrastructure.mapper.chat"},
    sqlSessionFactoryRef="chatSqlSessionFactory")
public class ChatDataSourceConfig {
    
    @Bean
    @Primary
    @ConfigurationProperties(prefix="spring.chat.datasource")
    public DataSourceProperties chatDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean(name={"chatGlobalConfiguration"})
    @Primary
    @ConfigurationProperties(prefix="mybatis.configuration")
    public org.apache.ibatis.session.Configuration chatGlobalConfiguration() {
        return new org.apache.ibatis.session.Configuration();
    }

    @Bean(name={"chatDataSource"})
    @Primary
    public DataSource chatDataSource(
        @Qualifier("chatDataSourceProperties") DataSourceProperties chatDataSourceProperties){
        return chatDataSourceProperties.initializeDataSourceBuilder().build();
    }

    @Bean(name={"chatSqlSessionFactory"})
    @Primary
    public SqlSessionFactory chatSqlSessionFactory(@Qualifier("chatDataSource") DataSource chatDataSource) throws Exception {
        SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
        sqlSessionFactory.setDataSource(chatDataSource);
        sqlSessionFactory.setConfiguration(chatGlobalConfiguration());
        return (SqlSessionFactory) sqlSessionFactory.getObject();
    }

    @Bean(name={"chatTransactionManager"})
    @Primary
    public PlatformTransactionManager chatTransactionManager(@Qualifier("chatDataSource") DataSource chatDataSource) {
        return new DataSourceTransactionManager(chatDataSource);
    }

    @Bean(name={"chatJdbcTemplate"})
    @Primary
    public JdbcTemplate chatJdbcTemplate(@Qualifier("chatDataSource") DataSource chatDataSource) {
        return new JdbcTemplate(chatDataSource);
    }
}
