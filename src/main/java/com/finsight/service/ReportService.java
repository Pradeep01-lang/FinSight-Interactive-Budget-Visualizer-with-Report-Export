package com.finsight.service;

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.util.JRSaver;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.*;

@Service
public class ReportService {

    public ByteArrayInputStream generateSampleReport() throws Exception {
        // Load and compile the .jrxml file
        InputStream jrxmlStream = new ClassPathResource("templates/sample_report.jrxml").getInputStream();
        JasperReport jasperReport = JasperCompileManager.compileReport(jrxmlStream);

        // Create parameters
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("title", "FinSight Report");
        parameters.put("content", "This report is generated using JasperReports and Spring Boot.");

        // Fill report with no data source (you can use a real one)
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, new JREmptyDataSource());

        // Export to PDF and return as stream
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        JasperExportManager.exportReportToPdfStream(jasperPrint, out);

        return new ByteArrayInputStream(out.toByteArray());
    }
}