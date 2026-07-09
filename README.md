# 🚀 KubeDeploy – Cloud Native 3-Tier DevOps Dashboard

<p align="center">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
</p>

---

## 📌 Overview

**KubeDeploy** is an advanced, full-stack Cloud Native DevOps Dashboard crafted to aggregate, manage, and monitor containerized ecosystems from a single interface. By combining real-time infrastructure observations with a robust internal task management platform, KubeDeploy serves as a unified control center for tracking Docker engines, local Kubernetes clusters, CI/CD health metrics, and simulated AWS cloud resources.

This project serves as a comprehensive showcase of modern production-grade DevOps engineering, tying together frontend state machinery, secure backend API design, automated orchestration layer discovery, and full-lifecycle container pipelines.

---

## ✨ Features

### 📊 Centralized Metrics & Live Dashboard
* **Dynamic Statistics:** High-level cards tracking active metrics, infrastructure alerts, and cluster vital signs instantly.
* **Resource Monitoring:** Real-time visibility into local CPU, Memory, Storage, and continuous Network telemetry.
* **Deployment Integrity:** Unified history feed displaying recent releases alongside overall system health states.

### ☸️ Kubernetes & Docker Monitoring
* **Orchestration Inspection:** Live look at running Pods, isolated Services, Controller Deployments, and underlying Node capacity.
* **Container Lifecycle Management:** Real-time visibility into active/stopped container runtimes, active images, and manual discovery loops.
* **Direct Syncing:** Native polling logic targeting the local cluster topology and local Docker sockets.

### 🛠️ Integrated DevOps Task Manager
* **Full CRUD Operations:** Seamless priority queue creation, retrieval, updates, and absolute task deletion.
* **State Lifecycles:** Tracks workflows smoothly across strict progress lanes: `Pending` ➔ `In Progress` ➔ `Completed`.
* **Telemetry Correlation:** Designed to match pending infrastructural work items directly with live engineering tasks.

### 🌐 CI/CD & Cloud Telemetry
* **GitHub Actions Integration:** Instant delivery reporting mapping workflow stages, build parameters, and deployment steps.
* **AWS Mock Infrastructure:** Custom dashboard modules demonstrating simulated resource statuses across EC2 instances, S3 buckets, VPC configurations, and IAM setups.

---

## 🏗️ System Architecture

<img width="2816" height="1536" alt="Kube-Deploy" src="https://github.com/user-attachments/assets/c4156d34-927d-4103-8c05-7e31021fade7" />

## 🛠️ Tech Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | React (Vite), Axios, React Router, Tailwind/CSS, Lucide Icons |
| **Backend** | Node.js, Express.js, Mongoose ODM |
| **Database** | MongoDB |
| **DevOps & Orchestration** | Docker, Docker Compose, Kubernetes, Minikube, `kubectl` |
| **CI/CD & Cloud** | GitHub Actions workflows, Docker Hub Registry, Mock AWS Resource APIs |

---

## 📂 Project Structure

```text
kube-deploy-3tier-devops-project/
├── .github/
│   └── workflows/          # CI/CD automated pipeline workflows
├── app/                    # Backend Node.js / Express service
│   ├── controllers/        # Business logic controllers
│   ├── models/             # Mongoose schemas (Tasks, Logs)
│   ├── routes/             # REST endpoint routing definitions
│   └── app.js              # Server bootstrapper and dependency configurations
├── frontend/               # Single Page Application
│   ├── src/
│   │   ├── assets/         # Images, static vectors, styles
│   │   ├── components/     # Reusable layout and telemetry cards
│   │   ├── pages/          # Main dashboard view states
│   │   └── services/       # Modularized Axios network queries
├── kubernetes/             # Production deployment manifest files
│   ├── deployment.yaml     # Pod template configurations & replicas
│   └── service.yaml        # Network routing ingress rules
├── docker-compose.yml      # Multi-container orchestration definition file
└── README.md               # Documentation guide

🔄 CI/CD Pipeline Workflow
<img width="2816" height="1536" alt="kube-deploy" src="https://github.com/user-attachments/assets/ee1de678-ffc0-4efa-aea2-3cc5f741b116" />


📡 Core REST API References

📋 Task Management Endpoints
GET    /api/tasks - Retrieves all project task tracking records.

POST   /api/tasks - Commits a new tracking entry into MongoDB.

PUT    /api/tasks/:id - Mutates an existing task field state (e.g., Progress/Priority).

DELETE /api/tasks/:id - Removes a given task by unique identifier.

☸️ Kubernetes Cluster State
GET    /api/cluster - Fetches runtime metadata from local orchestrators (Pods, Nodes, Services).

🐳 Docker Infrastructure Metrics
GET    /api/docker - Scrapes daemon states tracking active container volumes, engine values, and historical image hashes.

🚀 Local Deployment Setup
1. Clone the Source
Bash
git clone [https://github.com/Nitesh0717/kube-deploy-3tier-devops-project.git](https://github.com/Nitesh0717/kube-deploy-3tier-devops-project.git)
cd kube-deploy-3tier-devops-project
2. Install Microservice Dependencies
Configure Backend:

Bash
cd app
npm install
Configure Frontend:

Bash
cd ../frontend
npm install
3. Spin Up Container Environment (Local Simulation)
Launch the baseline multi-tier stack through Docker Compose to instantly verify localized container functionality:

Bash
docker compose up --build
4. Deploy Native Kubernetes Manifests
Spin up your local cluster workspace engine and initialize your core objects:

Bash
# Verify local orchestrator state
minikube start

# Mount application infrastructure definitions
kubectl apply -f kubernetes/
📷 System Interface Previews
Main System Metrics Dashboard
Real-time interface tracking general microservice metrics and infrastructure overview.

Kubernetes Operational Telemetry
State mapping showcasing active pod controllers, deployment health, and localized services.

Local Container Engine Watcher
Detailed tracking output visualizing current images, container statuses, and engine health.

DevOps Priority Work Management
Full CRUD task tracker illustrating active workflow progressions and ticket prioritization.

🔮 Future Architecture Roadmap
🔐 Secure AAA: Production-grade OAuth2 and deep Role-Based Access Control (RBAC).

📊 Enterprise Observability: Direct Prometheus metric scraping configurations coupled with rich Grafana dashboards.

📦 Cloud GitOps: Full infrastructure packaging via Helm Charts managed by automated ArgoCD deployment controllers.

☁️ Scalable Topology: Transition target towards live AWS Elastic Kubernetes Service (EKS) managed backends featuring active Horizontal Pod Autoscaling (HPA).

💼 Core Competencies Featured
Full-Stack Cloud Native Architecture: Designed and deployed a container-aware web interface communicating across independent, isolated service instances.

Container Orchestration Engine Management: Developed explicit mapping logic reading from underlying control loops to trace active Kubernetes objects and system resources.

Continuous Integration Automation: Standardized repository code verification using functional multi-stage GitHub Actions workflows resulting in repeatable builds.

Production Resource Isolation: Composed configuration layer structures separating multi-stage database instances, production microservice targets, and local developer variables cleanly.

👨‍💻 Maintainer
Nitesh Singh

GitHub: @Nitesh0717
