package com.sistema.examenes.controllers;

import com.sistema.examenes.entities.Exam;
import com.sistema.examenes.entities.Question;
import com.sistema.examenes.services.ExamService;
import com.sistema.examenes.services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/pregunta")
@CrossOrigin("*")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private ExamService examService;

    @PostMapping("/")
    public ResponseEntity<Question> saveQuestion(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }

    @PutMapping("/")
    public ResponseEntity<Question> updateQuestion(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.updateQuestion(question));
    }

    @GetMapping("/examen/{examenId}")
    public ResponseEntity<?> listQuestionOfExam(@PathVariable("examenId") Long examId){
        Exam exam = this.examService.getExam(examId);
        Set<Question> questions = exam.getQuestions();


        List exams = new ArrayList<Question>();
        if(exams.size() > Integer.parseInt(exam.getQuestion_number())){
            exams = exams.subList(0,Integer.parseInt(exam.getQuestion_number() + 1 ));

        }
        Collections.shuffle(exams); //mezclo los elementos
        return ResponseEntity.ok((exams));
    }

    @GetMapping("/{preguntaId}")
    public Question listQuestionById(@PathVariable("preguntaId") Long questionId){
        return this.questionService.getQuestion(questionId);
    }

    @DeleteMapping("/{preguntaId}")
    public void deleteQuestion(@PathVariable("preguntaId") Long questionId){
        this.questionService.deleteQuestion(questionId);
    }
}
