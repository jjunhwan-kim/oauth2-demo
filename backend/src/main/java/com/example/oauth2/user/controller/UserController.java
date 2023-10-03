package com.example.oauth2.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/api")
@RestController
public class UserController {

    @GetMapping("/users")
    public String getUserInfo(@AuthenticationPrincipal UserDetails userDetails) {
        return userDetails.getUsername();
    }
}
