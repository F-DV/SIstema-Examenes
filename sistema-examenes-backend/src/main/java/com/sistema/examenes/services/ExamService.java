package com.sistema.examenes.services;

import com.sistema.examenes.services.entities.Category;
import com.sistema.examenes.services.entities.Exam;

import java.util.List;
import java.util.Set;

public interface ExamService {
    Exam addExam(Exam exam);
    Exam updateExam(Exam exam);
    Set<Exam> getExams();
    Exam getExam(Long examId);
    void deleteExam(Long ExamId);
    List<Exam> listExamsOfOneCategory(Category category);
    List<Exam> getActiveExams();
    List<Exam> getCategoryExamsActive(Category category);
}
