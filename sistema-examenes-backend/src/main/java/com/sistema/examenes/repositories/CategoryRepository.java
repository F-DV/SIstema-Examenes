package com.sistema.examenes.repositories;

import com.sistema.examenes.services.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
