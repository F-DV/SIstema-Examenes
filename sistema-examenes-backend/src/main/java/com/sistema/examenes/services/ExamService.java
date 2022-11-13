package com.sistema.examenes.services;

import com.sistema.examenes.entities.Exam;

import java.util.Set;

public interface ExamService {
    Exam addExam(Exam exam);
    Exam updateExam(Exam exam);
    Set<Exam> getExams();
    Exam getExam(Long examId);
    void deleteExam(Long ExamId);
}
