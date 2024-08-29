type UserRole = "guest" | "member" | "admin"

type User = { // unions type
  username: string,
  role: "guest" | "member" | "admin"
}

// let userRole: UserRole = "admin"

const users: User[] = [
  { username: "john_doe", role: "member" },
  { username: "jane_doe", role: "admin" },
  { username: "guest_user", role: "guest" }
]

function fetchUserDetails(username: string): User {
  const user = users.find(user => user.username === username)
  if (!user) {
    throw new Error(`User with username ${username} not found`)
  }
  return user
}