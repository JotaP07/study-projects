package com.app.clientfy.service.implementation;

import com.app.clientfy.domain.User;
import com.app.clientfy.dto.UserDTO;
import com.app.clientfy.dtomapper.UserDTOMapper;
import com.app.clientfy.repository.UserRepository;
import com.app.clientfy.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository<User> userRepository;
    private final UserDTOMapper userDTOMapper;

    @Override
    public UserDTO createUser(User user) {
        return UserDTOMapper.fromUser(userRepository.create(user));
    }
}
