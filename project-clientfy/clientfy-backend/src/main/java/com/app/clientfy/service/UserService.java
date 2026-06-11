package com.app.clientfy.service;

import com.app.clientfy.domain.User;
import com.app.clientfy.dto.UserDTO;

public interface UserService {

    UserDTO createUser(User user);

}
