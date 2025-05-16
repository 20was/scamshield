# This file sets up the network infrastructure for ScamShield in AWS
# It creates a secure network environment with public and private areas

# A VPC (Virtual Private Cloud) is like a private network in AWS
# Think of it as your own isolated section of the cloud
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr_block  # The IP address range for our VPC (e.g., 10.0.0.0/16)
  enable_dns_support   = true                # Allows DNS resolution within the VPC
  enable_dns_hostnames = true                # Allows assigning DNS hostnames to instances

  tags = {
    Name        = "${var.project_name}-${var.environment}-vpc"  # Name tag for easy identification
    Environment = var.environment                               # Which environment this belongs to (dev/prod)
    Project     = var.project_name                             # Project identifier
  }
}

# Public subnets are for resources that need to be accessible from the internet
# Examples: web servers, load balancers
# We create multiple public subnets across different availability zones for high availability
resource "aws_subnet" "public" {
  count             = length(var.public_subnet_cidrs)  # Create one subnet for each CIDR block
  vpc_id            = aws_vpc.main.id                 # Put these subnets in our VPC
  cidr_block        = var.public_subnet_cidrs[count.index]  # IP range for this subnet
  availability_zone = var.availability_zones[count.index]   # Which AWS data center to use

  tags = {
    Name        = "${var.project_name}-${var.environment}-public-subnet-${count.index + 1}"
    Environment = var.environment
    Project     = var.project_name
  }
}

# Private subnets are for resources that should NOT be directly accessible from the internet
# Examples: databases, application servers
# These are more secure as they're not directly exposed to the internet
resource "aws_subnet" "private" {
  count             = length(var.private_subnet_cidrs)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_subnet_cidrs[count.index]
  availability_zone = var.availability_zones[count.index]

  tags = {
    Name        = "${var.project_name}-${var.environment}-private-subnet-${count.index + 1}"
    Environment = var.environment
    Project     = var.project_name
  }
}

# An Internet Gateway is like a router that connects our VPC to the internet
# It's required for resources in public subnets to access the internet
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name        = "${var.project_name}-${var.environment}-igw"
    Environment = var.environment
    Project     = var.project_name
  }
}

# A route table is like a set of rules that determine where network traffic goes
# This public route table allows traffic to/from the internet
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"                    # This means "all IP addresses"
    gateway_id = aws_internet_gateway.main.id   # Send all traffic through our internet gateway
  }

  tags = {
    Name        = "${var.project_name}-${var.environment}-public-rt"
    Environment = var.environment
    Project     = var.project_name
  }
}

# This connects our public subnets to the public route table
# It's like telling each public subnet to use these routing rules
resource "aws_route_table_association" "public" {
  count          = length(var.public_subnet_cidrs)
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

