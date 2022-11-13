package com.sistema.examenes.services.impl;

import com.sistema.examenes.entities.Exam;
import com.sistema.examenes.repositories.ExamRepository;
import com.sistema.examenes.services.ExamService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.LinkedHashSet;
import java.util.Set;

public class ExamServiceImpl implements ExamService {

    @Autowired
    private ExamRepository examRepository;


    @Override
    public Exam addExam(Exam exam) {
        return this.examRepository.save(exam);
    }

    @Override
    public Exam updateExam(Exam exam) {
        return this.examRepository.save(exam);
    }

    @Override
    public Set<Exam> getExams() {
        return new LinkedHashSet<>(this.examRepository.findAll());
    }

    @Override
    public Exam getExam(Long examId) {
        return this.examRepository.findById(examId).get();
    }

    @Override
    public void deleteExam(Long examId) {
        Exam exam = new Exam();
        exam.setExamId(examId);
        this.examRepository.delete(exam);

    }
}
