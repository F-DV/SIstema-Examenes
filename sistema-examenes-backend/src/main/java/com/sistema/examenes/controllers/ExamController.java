package com.sistema.examenes.controllers;

import com.sistema.examenes.entities.Exam;
import com.sistema.examenes.services.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/examen")
@CrossOrigin("*")
public class ExamController {

    @Autowired
    private ExamService examService;

    @PostMapping("/")
    public ResponseEntity<Exam> saveCategory(@RequestBody Exam exam){
        Exam savedExam = this.examService.addExam(exam);
        return ResponseEntity.ok((savedExam));
    }

    @GetMapping("/{examenId}")
    public Exam listExamById(@PathVariable("examenId")Long examId){
        return this.examService.getExam(examId);
    }

    @GetMapping("/")
    public ResponseEntity<?> listExam(){
        return ResponseEntity.ok(this.examService.getExams());
    }

    @PutMapping("/")
    public Exam updateCategory(@RequestBody Exam exam){
        return this.examService.updateExam(exam);
    }

    @DeleteMapping("/{examenId}")
    public void deleteCategory(@PathVariable("examenId") Long examId){
        this.examService.deleteExam(examId);
    }
}
