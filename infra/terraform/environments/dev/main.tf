# Development environment configuration
provider "aws" {
  region = var.aws_region
}

# Configure Terraform to store state in an S3 bucket (more on this later)
/*
terraform {
  backend "s3" {
    bucket         = "scamshield-terraform-state"
    key            = "dev/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-lock"
  }
}
*/

# Network module
module "network" {
  source = "../../modules/network"

  project_name = var.project_name
  environment  = var.environment
  
  # These will override the defaults in the module if youd like to customize
  # vpc_cidr_block       = "10.0.0.0/16"
  # public_subnet_cidrs  = ["10.0.1.0/24", "10.0.2.0/24"]
  # private_subnet_cidrs = ["10.0.3.0/24", "10.0.4.0/24"]
  # availability_zones   = ["us-east-1a", "us-east-1b"]
}

# Import existing code here, and add:

module "container" {
  source        = "../../modules/container"
  project_name  = var.project_name
  environment   = var.environment
}

# Add outputs to expose repository URLs
output "frontend_repository_url" {
  description = "URL for the frontend ECR repository"
  value       = module.container.frontend_repository_url
}

output "api_gateway_repository_url" {
  description = "URL for the API gateway ECR repository"
  value       = module.container.api_gateway_repository_url
}

output "auth_service_repository_url" {
  description = "URL for the auth service ECR repository"
  value       = module.container.auth_service_repository_url
}

output "reporting_service_repository_url" {
  description = "URL for the reporting service ECR repository"
  value       = module.container.reporting_service_repository_url
}