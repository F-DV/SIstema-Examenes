package com.sistema.examenes.repositories;

import com.sistema.examenes.services.entities.Category;
import com.sistema.examenes.services.entities.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExamRepository extends JpaRepository<Exam,Long> {

    List<Exam> findByCategory(Category category);
    List<Exam> findByActive(Boolean state);
    List<Exam> findByCategoryAndActive(Category category, Boolean state);
}
