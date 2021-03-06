package com.sjsu.cmpe202;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
@Slf4j
public class AFourAirlinesApplication {


    public static void main(String[] args) {
        SpringApplication.run(AFourAirlinesApplication.class, args);
    }

    @GetMapping("/health")
    public String healthCheck() {
        log.info("Health check being done");
        return "Health is OK";
    }

}
