package com.sistema.examenes.services;

import com.sistema.examenes.services.entities.Category;

import java.util.Set;

public interface CategoryService {

    Category addCategory(Category category);

    Category updateCategory(Category category);

    Set<Category> getCategories();

    Category getCategory(Long categoryId);

    void deleteCategory(Long CategoryId);

}
