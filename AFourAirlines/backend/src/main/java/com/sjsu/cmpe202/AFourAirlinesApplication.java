package com.sjsu.cmpe202;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
public class AFourAirlinesApplication {

	Logger LOG = LoggerFactory.getLogger(AFourAirlinesApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(AFourAirlinesApplication.class, args);
	}

	@GetMapping("/health")
	public String healthCheck(){
		LOG.info("info log check");
		return "Health is OK";
	}

}
