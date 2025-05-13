output "frontend_repository_url" {
  description = "The URL of the frontend ECR repository"
  value       = aws_ecr_repository.frontend.repository_url
}

output "api_gateway_repository_url" {
  description = "The URL of the API Gateway ECR repository"
  value       = aws_ecr_repository.api_gateway.repository_url
}

output "auth_service_repository_url" {
  description = "The URL of the Auth Service ECR repository"
  value       = aws_ecr_repository.auth_service.repository_url
}

output "reporting_service_repository_url" {
  description = "The URL of the Reporting Service ECR repository"
  value       = aws_ecr_repository.reporting_service.repository_url
}