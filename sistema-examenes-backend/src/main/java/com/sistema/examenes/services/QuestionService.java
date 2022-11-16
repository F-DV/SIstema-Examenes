package com.sistema.examenes.services;

import com.sistema.examenes.services.entities.Exam;
import com.sistema.examenes.services.entities.Question;

import java.util.Set;

public interface QuestionService {

    Question addQuestion(Question question);

    Question updateQuestion(Question question);

    Set<Question> getQuestions();

    Question getQuestion(long questionId);

    Set<Question> getExamQuestions(Exam exam);

    void deleteQuestion(Long questionId);

    Question listQuestion(Long questionId);

}
