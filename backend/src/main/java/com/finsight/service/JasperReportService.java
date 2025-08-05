package com.finsight.service;

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class JasperReportService {

    private final ResourceLoader resourceLoader;

    public JasperReportService(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    public byte[] generateMonthlyReport(List<?> dataList, String templateName) {
        try {
            // Load the .jrxml file from classpath
            Resource resource = resourceLoader.getResource("classpath:reports/" + templateName);
            InputStream jrxmlStream = resource.getInputStream();

            // Compile the report
            JasperReport jasperReport = JasperCompileManager.compileReport(jrxmlStream);

            // Data source
            JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(dataList);

            // Parameters (can be empty)
            Map<String, Object> parameters = new HashMap<>();

            // Fill the report
            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);

            // Export to PDF
            return JasperExportManager.exportReportToPdf(jasperPrint);

        } catch (Exception e) {
            throw new RuntimeException("Failed to generate Jasper Report: " + e.getMessage(), e);
        }
    }
}