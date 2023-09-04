package com.hp_back2.hp_back2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class HpBack2Application {

	public static void main(String[] args) {
		
		// Lataa ympäristömuuttujat .env-tiedostosta
        Dotenv dotenv = Dotenv.load();
        System.out.println("Moi");

        // Hae salasana ympäristömuuttujana
        String password = dotenv.get("SPRING_DATASOURCE_PASSWORD");

        // Voit käyttää salasanaa application.properties-tiedostossa
        System.setProperty("spring.datasource.password", password);
		
		SpringApplication.run(HpBack2Application.class, args);
	}

}
