# This file defines the ECR repositories for storing our Docker images

resource "aws_ecr_repository" "frontend" {
  name                 = "${var.project_name}-${var.environment}-frontend"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
  
  tags = {
    Name        = "${var.project_name}-${var.environment}-frontend"
    Environment = var.environment
    Project     = var.project_name
  }
}

resource "aws_ecr_repository" "api_gateway" {
  name                 = "${var.project_name}-${var.environment}-api-gateway"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
  
  tags = {
    Name        = "${var.project_name}-${var.environment}-api-gateway"
    Environment = var.environment
    Project     = var.project_name
  }
}

resource "aws_ecr_repository" "auth_service" {
  name                 = "${var.project_name}-${var.environment}-auth-service"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
  
  tags = {
    Name        = "${var.project_name}-${var.environment}-auth-service"
    Environment = var.environment
    Project     = var.project_name
  }
}

resource "aws_ecr_repository" "reporting_service" {
  name                 = "${var.project_name}-${var.environment}-reporting-service"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
  
  tags = {
    Name        = "${var.project_name}-${var.environment}-reporting-service"
    Environment = var.environment
    Project     = var.project_name
  }
}

# Lifecycle policy to clean up old images (optional but recommended)
resource "aws_ecr_lifecycle_policy" "cleanup_policy" {
  for_each   = {
    frontend         = aws_ecr_repository.frontend.name
    api_gateway      = aws_ecr_repository.api_gateway.name
    auth_service     = aws_ecr_repository.auth_service.name
    reporting_service = aws_ecr_repository.reporting_service.name
  }
  
  repository = each.value

  policy = jsonencode({
    rules = [{
      rulePriority = 1
      description  = "Keep only 5 images"
      selection = {
        tagStatus     = "any"
        countType     = "imageCountMoreThan"
        countNumber   = 5
      }
      action = {
        type = "expire"
      }
    }]
  })
}