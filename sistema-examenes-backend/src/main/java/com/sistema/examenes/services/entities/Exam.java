package com.sistema.examenes.services.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long examId;

    private String title;
    private String description;
    private String max_points;
    private String question_number;
    private boolean active = false;

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @OneToMany(mappedBy = "exam",fetch = FetchType.LAZY)
    @JsonIgnore //Cuando llamo las categorias, ignora los examenes relacionados a esta categoria
    private Set<Question> questions = new HashSet<>();

    public Exam() {
    }

    public Long getExamId() {
        return examId;
    }

    public void setExamId(Long examId) {
        this.examId = examId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMax_points() {
        return max_points;
    }

    public void setMax_points(String max_points) {
        this.max_points = max_points;
    }

    public String getQuestion_number() {
        return question_number;
    }

    public void setQuestion_number(String question_number) {
        this.question_number = question_number;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }
}
