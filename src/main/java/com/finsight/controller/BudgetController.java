package com.finsight.controller;

import com.finsight.model.Budget;
import com.finsight.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/budgets")
public class BudgetController {

    @Autowired
    private BudgetRepository budgetRepo;

    @PostMapping
    public Budget createBudget(@RequestBody Budget budget) {
        return budgetRepo.save(budget);
    }

    @GetMapping("/user/{userId}")
    public List<Budget> getBudgetsByUser(@PathVariable Long userId) {
        return budgetRepo.findByUserId(userId);
    }
}
