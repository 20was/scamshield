import type { User } from "@/models/user"

// Mock authentication service
export const authService = {
  async login(email: string, password: string): Promise<User> {
    // In a real app, this would make an API call to authenticate the user
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Mock successful login
    return {
      id: "user-1",
      name: "John Doe",
      email,
      role: "user",
      createdAt: new Date().toISOString(),
    }
  },

  async register(name: string, email: string, password: string): Promise<User> {
    // In a real app, this would make an API call to register the user
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Mock successful registration
    return {
      id: "user-1",
      name,
      email,
      role: "user",
      createdAt: new Date().toISOString(),
    }
  },

  async logout(): Promise<void> {
    // In a real app, this would make an API call to log out the user
    await new Promise((resolve) => setTimeout(resolve, 500))
  },

  async getCurrentUser(): Promise<User | null> {
    // In a real app, this would make an API call to get the current user
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Mock current user
    return {
      id: "user-1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "user",
      createdAt: new Date().toISOString(),
    }
  },
}
