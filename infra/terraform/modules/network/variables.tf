# This file defines all the variables that can be configured for our network infrastructure
# These variables allow us to customize the network setup without changing the main code

# The project name is used for naming resources and adding tags
# Example: "scamshield" would create resources like "scamshield-dev-vpc"
variable "project_name" {
  description = "The name of the project"
  type        = string
}

# The environment helps distinguish between different deployments
# Common values: "dev", "staging", "prod"
variable "environment" {
  description = "The deployment environment"
  type        = string
}

# The VPC CIDR block defines the IP address range for our entire network
# 10.0.0.0/16 means we can use IP addresses from 10.0.0.0 to 10.0.255.255
# This gives us 65,536 IP addresses to work with
variable "vpc_cidr_block" {
  description = "The CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

# Public subnet CIDR blocks define IP ranges for resources that need internet access
# Each subnet gets 256 IP addresses (10.0.1.0 to 10.0.1.255, 10.0.2.0 to 10.0.2.255)
# We create two public subnets for high availability
variable "public_subnet_cidrs" {
  description = "The CIDR blocks for the public subnets"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

# Private subnet CIDR blocks define IP ranges for secure, internal resources
# Each subnet gets 256 IP addresses (10.0.3.0 to 10.0.3.255, 10.0.4.0 to 10.0.4.255)
# These subnets are not directly accessible from the internet
variable "private_subnet_cidrs" {
  description = "The CIDR blocks for the private subnets"
  type        = list(string)
  default     = ["10.0.3.0/24", "10.0.4.0/24"]
}

# Availability zones are different data centers within the AWS region
# Using multiple AZs helps protect against data center failures
# ap-southeast-2a and ap-southeast-2b are two different data centers in Sydney
variable "availability_zones" {
  description = "List of availability zones to use"
  type        = list(string)
  default     = ["ap-southeast-2a", "ap-southeast-2b"]
}

