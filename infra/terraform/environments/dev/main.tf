# This is the main configuration file for our development environment
# It defines how our infrastructure will be set up in AWS

# First, we tell Terraform we want to use AWS as our cloud provider
# The region is taken from our variables file (ap-southeast-2 by default)
provider "aws" {
  region = var.aws_region
}

# This commented section is for storing Terraform's state file in AWS S3
# State files keep track of what resources Terraform has created
# Storing it in S3 is a best practice for team collaboration
/*
terraform {
  backend "s3" {
    bucket         = "scamshield-terraform-state"
    key            = "dev/terraform.tfstate"
    region         = "ap-southeast-2"
    encrypt        = true
    dynamodb_table = "terraform-lock"
  }
}
*/

# Here we're creating our network infrastructure using a module
# A module is like a reusable package of Terraform code
# This module will create our VPC, subnets, and other networking components
module "network" {
  source = "../../modules/network"

  project_name = var.project_name
  environment  = var.environment
  
  # These commented lines show how you can customize the network settings
  # They're currently using default values from the network module
  # vpc_cidr_block       = "10.0.0.0/16"        # The IP range for our VPC
  # public_subnet_cidrs  = ["10.0.1.0/24", "10.0.2.0/24"]    # IP ranges for public subnets
  # private_subnet_cidrs = ["10.0.3.0/24", "10.0.4.0/24"]    # IP ranges for private subnets
  # availability_zones   = ["ap-southeast-2a", "ap-southeast-2b"]      # Which AWS data centers to use
}

# This module sets up our container infrastructure
# It will create ECR (Elastic Container Registry) repositories for our services
# ECR is like a private Docker registry where we store our application images
module "container" {
  source        = "../../modules/container"
  project_name  = var.project_name
  environment   = var.environment
}

# The following outputs show the URLs of our ECR repositories
# These URLs are where we'll push our Docker images to
# They're useful for our CI/CD pipeline and deployment scripts

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