# This file defines variables for the development environment in Terraform
# Variables are like containers that store values we can use throughout our infrastructure code
# They make our code more flexible and reusable across different environments

# This variable defines which AWS region (data center location) we want to deploy our resources to
# ap-southeast-2 is AWS's data center in Sydney, Australia
variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
  default     = "ap-southeast-2"
}

# This variable stores the name of our project
# It's used to tag resources and create unique names for our AWS resources
variable "project_name" {
  description = "The name of the project"
  type        = string
  default     = "scamshield"
}

# This variable specifies which environment we're deploying to
# Common values are: dev (development), staging, prod (production)
# This helps us manage different versions of our infrastructure
variable "environment" {
  description = "The deployment environment"
  type        = string
  default     = "dev"
}

