package com.app.clientfy.repository;

import com.app.clientfy.domain.Role;

import java.util.Collection;

public interface RoleRepository<T extends Role> {
    /* Crud Basico */
    T create(T data);
    Collection<T> list(int page, int pageSize);
    T get(Long id);
    T update(T data);
    Boolean delete(Long id);

    /* Crud + Complexo */
    void addRoleToUser(Long userId, String roleName);
    Role getRoleById(Long userId);
    Role getRoleByUserEmail(String email);
    void updateUserRole(Long userId, String roleName);
}
