# Variable definitions for the ScamShield infrastructure

variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
  default     = "us-east-1"  # Change this to your preferred region
}

variable "project_name" {
  description = "The name of the project"
  type        = string
  default     = "scamshield"
}

variable "environment" {
  description = "The deployment environment (dev, staging, production)"
  type        = string
  default     = "dev"
}

