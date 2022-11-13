package com.sistema.examenes.repositories;

import com.sistema.examenes.entities.Exam;
import com.sistema.examenes.entities.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    Set<Question> findByExam(Exam exam);
}
