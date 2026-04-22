# kube-deploy-3tier-devops-project

A cloud-native DevOps project demonstrating end-to-end CI/CD pipeline for a 3-tier application using Docker, Kubernetes, Terraform and AWS.

## Tech Stack

- Node.js
- Docker
- Kubernetes
- Terraform
- AWS EC2
- GitHub Actions
- MongoDB

## Architecture

User → GitHub → CI Pipeline → Docker → Kubernetes → AWS Infrastructure

## Features

- Containerized application using Docker
- Kubernetes deployment configuration
- Infrastructure provisioning using Terraform
- CI pipeline using GitHub Actions
- 3-tier architecture (App, Database, Infrastructure)
- Cloud deployment ready

## Project Structure

app → Node.js application  
docker → Dockerfile  
kubernetes → deployment YAML files  
terraform → infrastructure as code  
.github → CI pipeline  

## How to Run

### Docker

docker build -t todo-app -f docker/Dockerfile .  
docker run -p 8000:8000 todo-app  

### Kubernetes

kubectl apply -f kubernetes/

### Terraform

cd terraform  
terraform init  
terraform apply  

## Future Improvements

- Auto deployment using CD pipeline
- Monitoring integration
- Logging system
- Helm charts
