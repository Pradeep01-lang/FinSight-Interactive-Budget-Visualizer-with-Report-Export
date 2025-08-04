package com.finsight.controller;

import com.finsight.model.Transaction;
import com.finsight.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepo;

    // Create a new transaction
    @PostMapping
    public Transaction createTransaction(@RequestBody Transaction transaction) {
        return transactionRepo.save(transaction);
    }

    // Get all transactions
    @GetMapping
    public List<Transaction> getAllTransactions() {
        return transactionRepo.findAll();
    }

    // ✅ Get transactions for a specific user (return JSON explicitly)
    @GetMapping(value = "/user/{userId}", produces = "application/json")
    public List<Transaction> getTransactionsByUser(@PathVariable Long userId) {
        return transactionRepo.findByUserId(userId);
    }

    // Delete a transaction by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
        Optional<Transaction> transaction = transactionRepo.findById(id);
        if (transaction.isPresent()) {
            transactionRepo.deleteById(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }
}