package com.app.clientfy.repository;

import com.app.clientfy.domain.User;

import java.util.Collection;

public interface UserRepository<T extends User> {
    /* Crud Basico */
    T create(T data);
    Collection<T> list(int page, int pageSize);
    T get(Long id);
    T update(T data);
    Boolean delete(Long id);

    /* Crud + Complexo */
}
