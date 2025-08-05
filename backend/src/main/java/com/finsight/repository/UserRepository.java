package com.finsight.repository;

import com.finsight.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Custom methods can be added here if needed
}