package jp.norinori777.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@MapperScan(basePackages="jp.norinori777.infrastructure.datasource.nori")
// @MapperScan(basePackages="jp.norinori777.infrastructure.datasource.nori", sqlSessionFactoryRef="noriSqlSessionFactory")
public class NoriDataSourceConfig {
    @Bean(name={"noriDataSourceProperties"})
    @ConfigurationProperties(prefix="spring.nori.datasource")
    public DataSourceProperties noriDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean(name={"noriDataSource"})
    public DataSource noriDataSource(){
        return noriDataSourceProperties().initializeDataSourceBuilder().build();
    }

    // @Bean(name = {"noriSqlSessionFactory"})
    // public SqlSessionFactory noriSqlSessionFactory() throws Exception {
    //     SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
    //     factoryBean.setDataSource(noriDataSource());
    //     return factoryBean.getObject();
    // }

    // @Bean(name = {"noriTransactionManager"})
    // public PlatformTransactionManager noriTransactionManager() {
    //     return new DataSourceTransactionManager(noriDataSource());
    // }
}
