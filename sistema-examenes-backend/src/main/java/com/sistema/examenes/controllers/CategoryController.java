package com.sistema.examenes.controllers;

import com.sistema.examenes.entities.Category;
import com.sistema.examenes.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categoria")
@CrossOrigin
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/")
    public ResponseEntity<Category> saveCategory(@RequestBody Category category){
        Category savedCategory = this.categoryService.addCategory(category);
        return ResponseEntity.ok((savedCategory));
    }

    @GetMapping("/{categoriaId}")
    public Category listCategoryById(@PathVariable("categoriaId")Long categoryId){
        return this.categoryService.getCategory(categoryId);
    }

    @GetMapping("/")
    public ResponseEntity<?> listCategory(){
        return ResponseEntity.ok(this.categoryService.getCategories());
    }

    @PutMapping("/")
    public Category updateCategory(@RequestBody Category category){
        return this.categoryService.updateCategory(category);
    }

    @DeleteMapping("/{categoriaId}")
    public void deleteCategory(@PathVariable("categoriaId") Long categoryId){
        this.categoryService.deleteCategory(categoryId);
    }
}
