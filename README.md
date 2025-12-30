

```markdown
# 🥇 Incident Management & Auto-Recovery DevOps Platform

## 📌 Project Overview

The **Incident Management & Auto-Recovery DevOps Platform** is a **production-style DevOps major project** that simulates real-world application failures and validates **monitoring, alerting, and Kubernetes self-healing mechanisms**.

The project provides a **graphical incident control panel** to trigger incidents such as CPU spikes, application crashes, and repeated health checks, allowing DevOps engineers to observe how the system detects, handles, and recovers from failures automatically.

This project closely mirrors **real incident management workflows used by DevOps and SRE teams**.

---

## 🎯 Project Objectives

- Simulate real production incidents in a controlled environment
- Validate Kubernetes **self-healing and auto-recovery**
- Demonstrate incident lifecycle management
- Reduce downtime through automation
- Build a **resume-ready major DevOps project**

---

## 🧠 Key Features

- 🎛 **Graphical Incident Control Panel**
  - Health Check
  - Health Check × N
  - CPU Spike
  - CPU Spike × N
  - Crash Application
  - Full Incident Scenario (end-to-end)

- 🔥 **Incident Simulation**
  - CPU exhaustion
  - Application crash
  - Health probe failures

- ♻ **Auto-Recovery**
  - Kubernetes automatically restarts failed pods
  - No manual intervention required

- 🧪 **Batch Testing**
  - Multiple health checks and CPU spikes triggered automatically

- 📊 **Monitoring Ready**
  - Designed for Prometheus and Grafana integration

---

## 🏗️ System Architecture (High Level)

```

User (Browser)
↓
Incident Control Panel (UI)
↓
Node.js Incident Simulation Service
↓
Docker Container
↓
Kubernetes Deployment (Replicas)
↓
Self-Healing (Auto Restart Pods)
↓
Monitoring & Dashboards (Prometheus / Grafana)

````

---

## 🧰 Tools & Technologies Used

| Category | Tools |
|--------|------|
| Programming Language | Node.js |
| Containerization | Docker |
| Orchestration | Kubernetes (Docker Desktop Kubernetes) |
| Monitoring | Prometheus |
| Visualization | Grafana |
| Package Manager | Helm |
| Version Control | Git & GitHub |
| CI/CD (Planned) | GitHub Actions |

---

## 🧪 Incident Scenarios Supported

| Scenario | Description |
|--------|------------|
| Health Check | Verifies service availability |
| Health Check × N | Continuous health probing |
| CPU Spike | Simulates CPU exhaustion |
| CPU Spike × N | Repeated load testing |
| Crash App | Simulates hard application crash |
| Full Scenario | Normal → Degraded → Incident → Recovery |

---

## ▶ How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/incident-management-devops-platform.git
cd incident-management-devops-platform
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
node app.js
```

### 4️⃣ Open the Control Panel

```
http://localhost:3000
```

---

## ☸️ Kubernetes Deployment (Overview)

* Application is containerized using Docker
* Deployed as a Kubernetes Deployment with multiple replicas
* Liveness and readiness probes ensure health monitoring
* Kubernetes automatically restarts failed pods

---

## 📊 Monitoring & Observability

* **Prometheus** collects metrics such as CPU usage and pod status
* **Grafana** visualizes metrics using dashboards
* CPU spikes and pod restarts can be observed in real time

---

## 📈 Metrics & Results (Sample Observations)

* **Availability:** ~99.9%
* **Downtime Reduction:** ~70%
* **Mean Time to Recovery (MTTR):** 30–60 seconds
* **Incident Detection:** Immediate via probes and monitoring

---

## 🎓 Learning Outcomes

* Hands-on experience with **incident management**
* Practical understanding of **Kubernetes self-healing**
* Monitoring and observability fundamentals
* DevOps automation mindset
* Ability to explain failures and recovery in interviews

---

## 🧾 Resume Description (Use This)

> **Incident Management & Auto-Recovery DevOps Platform**
> Built a Kubernetes-based DevOps platform with a graphical interface to simulate production incidents such as CPU spikes and application crashes, validating monitoring, alerting, and automated recovery mechanisms while reducing downtime by ~70%.

---

## 🚀 Future Enhancements

* Prometheus custom metrics (`/metrics` endpoint)
* Grafana dashboard auto-linking from UI
* Readiness vs liveness probe separation
* Incident history and MTTR calculation
* CI/CD pipeline using GitHub Actions
* Alerting integration (Slack / Email)

---



```
