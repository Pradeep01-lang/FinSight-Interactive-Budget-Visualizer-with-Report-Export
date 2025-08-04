# FinSight – Interactive Budget Visualizer with Report Export

FinSight is a full-stack personal finance management web app that allows users to manually track expenses, manage monthly budgets, visualize spending trends using interactive charts, and export detailed financial summaries. Designed for privacy-conscious users who prefer not to link bank accounts, FinSight offers a clean, responsive UI and powerful data visualization to support smart financial habits.

---

## Features

- Interactive bar charts to analyze spending patterns
- Manual transaction and budget input system
- Export monthly reports as CSV (PDF export planned)
- Budget goal creation and progress tracking
- Alerts for goal milestones and overspending (coming soon)
- Pattern detection for recurring expenses (coming soon)

---

## Tech Stack

| Layer        | Technology                               |
|--------------|-------------------------------------------|
| **Frontend** | React.js, Tailwind CSS, Chart.js          |
| **Backend**  | Java 21, Spring Boot (REST APIs)          |
| **Database** | MySQL, Spring Data JPA                    |
| **Reports**  | CSV Export (JasperReports/iText for PDF - WIP) |
| **State**    | React Context API                         |

---

## Implementation Highlights

### Full-Stack Architecture
- Layered backend architecture (Controller → Service → Repository) for modularity and scalability.
- Integrated MySQL with Spring Boot using Spring Data JPA.

### Frontend (React + Tailwind CSS)
- Responsive and mobile-friendly UI built with Tailwind.
- Real-time visualizations powered by Chart.js.
- State management using React Context API.

### Backend (Java 21 + Spring Boot)
- RESTful APIs for transactions, budgets, and summaries.
- Input validation, error handling, and clean DTO structures.
- Designed with future scalability and microservice adaptation in mind.

### Charts and Reports
- Dynamic charts update as users modify their data.
- CSV export implemented for sharing/spreadsheet analysis.
- Planned: PDF generation with JasperReports or iText for formal monthly reports.

---

## Screenshots (Coming Soon)

> Will include UI snapshots and chart previews here.

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- MySQL (v8+)
- Java 21
- Maven (for backend)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/FinSight.git
cd FinSight
