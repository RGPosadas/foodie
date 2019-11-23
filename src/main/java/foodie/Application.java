package foodie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// @Configuration
// @ComponentScan("com.baeldung.jdbc")
// public class SpringJdbcConfig {
//     @Bean
//     public DataSource mysqlDataSource() {
//         DriverManagerDataSource dataSource = new DriverManagerDataSource();
//         dataSource.setDriverClassName("com.mysql.jdbc.Driver");
//         dataSource.setUrl("jdbc:mysql://localhost:3306/springjdbc");
//         dataSource.setUsername("guest_user");
//         dataSource.setPassword("guest_password");
 
//         return dataSource;
//     }
// }
