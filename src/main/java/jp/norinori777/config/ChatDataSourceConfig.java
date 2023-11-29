package jp.norinori777.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
// @MapperScan(basePackages={"jp.norinori777.infrastructure.datasource"},
// sqlSessionFactoryRef="chatSqlSessionFactory")
@MapperScan(basePackages={"jp.norinori777.infrastructure.datasource.chat"})
// sqlSessionFactoryRef="chatSqlSessionFactory")
public class ChatDataSourceConfig {
    @Bean(name={"chatDataSourceProperties"})
    @Primary
    @ConfigurationProperties(prefix="spring.chat.datasource")
    public DataSourceProperties chatDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean(name={"chatDataSource"})
    @Primary
    public DataSource chatDataSource(){
        return chatDataSourceProperties().initializeDataSourceBuilder().build();
    }

    // @Bean(name={"chatSqlSessionFactory"})
    // @Primary
    // public SqlSessionFactory chatSqlSessionFactory() throws Exception {
    //     SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
    //     factoryBean.setDataSource(chatDataSource());
    //     return factoryBean.getObject();
    // }

    // @Bean(name={"chatTransactionManager"})
    // @Primary
    // public PlatformTransactionManager chatTransactionManager() {
    //     return new DataSourceTransactionManager(chatDataSource());
    // }
}

// import javax.sql.DataSource;

// import org.springframework.core.env.Environment;
// import org.mybatis.spring.annotation.MapperScan;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.jdbc.datasource.DriverManagerDataSource;

// @Configuration
// @MapperScan(basePackages={"jp.norinori777.infrastructure.datasource.chat"})
// public class ChatDataSourceConfig {

//     @Autowired
//     private Environment environment;

//     @Bean
//     public DataSource dataSource(){
//         final DriverManagerDataSource dataSource = new DriverManagerDataSource();

//         dataSource.setDriverClassName(environment.getProperty("spring.datasource.driver-class-name"));
//         dataSource.setUrl(environment.getProperty("spring.datasource.url"));
//         dataSource.setUsername(environment.getProperty("spring.datasource.username"));
//         dataSource.setPassword(environment.getProperty("spring.datasource.password"));

//         return dataSource;
//     }
// }
