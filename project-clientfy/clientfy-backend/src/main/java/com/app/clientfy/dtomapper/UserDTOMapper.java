package com.app.clientfy.dtomapper;

import com.app.clientfy.domain.User;
import com.app.clientfy.dto.UserDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class UserDTOMapper {

    public static UserDTO fromUser(User user) {
        if (user == null) {
            return null;
        }
        UserDTO userDTO = new UserDTO();
        BeanUtils.copyProperties(user, userDTO);
        return userDTO;
    }

    public static User toUser(UserDTO userDTO) {
        if (userDTO == null) {
            return null;
        }
        User user = new User();
        BeanUtils.copyProperties(userDTO, user);
        return user;
    }

}
