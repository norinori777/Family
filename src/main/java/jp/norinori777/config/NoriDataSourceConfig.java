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
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@MapperScan(basePackages={"jp.norinori777.infrastructure.mapper.nori"},
    sqlSessionFactoryRef="noriSqlSessionFactory")
public class NoriDataSourceConfig {

    @Bean
    @ConfigurationProperties(prefix="spring.nori.datasource")
    public DataSourceProperties noriDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean(name={"noriGlobalConfiguration"})
    @ConfigurationProperties(prefix="mybatis.configuration")
    public org.apache.ibatis.session.Configuration noriGlobalConfiguration() {
        return new org.apache.ibatis.session.Configuration();
    }

    @Bean(name={"noriDataSource"})
    public DataSource noriDataSource(
        @Qualifier("noriDataSourceProperties") DataSourceProperties noriDataSourceProperties){
        return noriDataSourceProperties.initializeDataSourceBuilder().build();
    }

    @Bean(name = {"noriSqlSessionFactory"})
    public SqlSessionFactory noriSqlSessionFactory(@Qualifier("noriDataSource") DataSource noriDataSource)
    throws Exception {
        SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
        sqlSessionFactory.setDataSource(noriDataSource);
        sqlSessionFactory.setConfiguration(noriGlobalConfiguration());
        return (SqlSessionFactory) sqlSessionFactory.getObject();
    }

    @Bean(name = {"noriTransactionManager"})
    public PlatformTransactionManager noriTransactionManager(DataSource noriDataSource) {
        return new DataSourceTransactionManager(noriDataSource);
    }
}
