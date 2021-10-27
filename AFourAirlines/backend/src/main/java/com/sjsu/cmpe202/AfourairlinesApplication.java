package com.sjsu.cmpe255;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
public class AfourairlinesApplication {

	public static void main(String[] args) {
		SpringApplication.run(AfourairlinesApplication.class, args);
	}

	@GetMapping("/health")
	public String healthCheck(){
		return "Health is OK";
	}

}
