package br.com.asamistudiohair.repository;

import br.com.asamistudiohair.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
