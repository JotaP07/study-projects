package com.app.clientfy.resource;

import com.app.clientfy.domain.HttpResponse;
import com.app.clientfy.domain.User;
import com.app.clientfy.dto.UserDTO;
import com.app.clientfy.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Map;

import static java.time.LocalTime.now;

@RestController
@RequestMapping(path = "/user")
@RequiredArgsConstructor
public class UserResource {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<HttpResponse> saveUser(@RequestBody @Valid User user) {
        UserDTO userDTO = userService.createUser(user);
        URI uri = getUri(userDTO.getId());

        return ResponseEntity.created(uri).body(
                HttpResponse.builder()
                        .timestamp(now().toString())
                        .data(Map.of("user", userDTO))
                        .message("User created")
                        .status(HttpStatus.CREATED)
                        .statusCode(String.valueOf(HttpStatus.CREATED.value()))
                        .build());
    }

    private URI getUri(Long userId) {
        return URI.create(ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/user/register")
                .buildAndExpand(userId).toUriString());
    }
}
