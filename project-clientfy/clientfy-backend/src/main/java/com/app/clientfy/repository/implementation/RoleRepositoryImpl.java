package com.app.clientfy.repository.implementation;

import com.app.clientfy.domain.Role;
import com.app.clientfy.exception.ApiException;
import com.app.clientfy.repository.RoleRepository;
import com.app.clientfy.rowmapper.RoleRowMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import static com.app.clientfy.query.RoleQuery.INSERT_ROLE_TO_USER_QUERY;
import static com.app.clientfy.query.RoleQuery.SELECT_ROLE_BY_NAME_QUERY;
import static java.util.Objects.requireNonNull;

@Repository
@RequiredArgsConstructor
@Slf4j
public class RoleRepositoryImpl implements RoleRepository<Role> {

    private final NamedParameterJdbcTemplate jdbc;

    @Override
    public Role create(Role data) {
        // Implementar criação de role
        return null;
    }

    @Override
    public Collection<Role> list(int page, int pageSize) {
        // Implementar listagem paginada
        return List.of();
    }

    @Override
    public Role get(Long id) {
        // Implementar busca por ID
        return null;
    }

    @Override
    public Role update(Role data) {
        // Implementar atualização de role
        return null;
    }

    @Override
    public Boolean delete(Long id) {
        // Implementar exclusão de role
        return null;
    }

    @Override
    public void addRoleToUser(Long userId, String roleName) {
        log.info("Add role {} to user id: {}", roleName, userId);
        try {
            // Obtem o role pelo nome
            Role role = jdbc.queryForObject(SELECT_ROLE_BY_NAME_QUERY, Map.of("name", roleName), new RoleRowMapper());

            // Garante que o role não seja null
            if (role == null) {
                throw new ApiException("Role not found for name: " + roleName);
            }

            // Inserir o role do usuário com os parâmetros corretos
            jdbc.update(INSERT_ROLE_TO_USER_QUERY, Map.of("user_id", userId, "role_id", role.getId()));
        } catch (EmptyResultDataAccessException exception) {
            log.error(exception.getMessage());
            throw new ApiException("No role found by name: " + roleName);
        } catch (Exception exception) {
            log.error(exception.getMessage());
            throw new ApiException("An error occurred while adding role to user: " + exception.getMessage());
        }
    }


    @Override
    public Role getRoleById(Long userId) {
        // Implementar busca por ID de role
        return null;
    }

    @Override
    public Role getRoleByUserEmail(String email) {
        // Implementar busca de role por email
        return null;
    }

    @Override
    public void updateUserRole(Long userId, String roleName) {
        // Implementar atualização de role de usuário
    }
}
