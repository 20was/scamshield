# Just declare the variables you need, without defaults - these will be passed from parent modules
variable "project_name" {
  description = "The name of the project"
  type        = string
}

variable "environment" {
  description = "The deployment environment (dev, staging, production)"
  type        = string
}

# Add any container-specific variables here
variable "image_retention_count" {
  description = "Number of container images to retain for each repository"
  type        = number
  default     = 5
}