package com.finsight.service;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.HashMap;

@Service
public class ExpensePatternService {

    public Map<String, Double> analyzePatterns(Long userId) {
        // Mocked logic: in real life, pull data from DB using repositories

        Map<String, Double> mockData = new HashMap<>();
        mockData.put("Food", 2500.0);
        mockData.put("Transport", 800.0);
        mockData.put("Utilities", 1200.0);
        mockData.put("Entertainment", 600.0);
        mockData.put("Savings", 1000.0);

        return mockData;
    }
}