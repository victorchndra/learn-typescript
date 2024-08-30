type UserRole = "guest" | "member" | "admin"

type User = {
  id: number,
  username: string,
  role: "guest" | "member" | "admin"
}

type UpdatedUser = Partial<User>

let nextUserId = 1

// let userRole: UserRole = "admin"

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_doe", role: "admin" },
  { id: 3, username: "guest_user", role: "guest" }
]

function fetchUserDetails(username: string): User {
  const user = users.find(user => user.username === username)
  if (!user) {
    throw new Error(`User with username ${username} not found`)
  }
  return user
}

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find(user => user.id === id)
  if (!foundUser) {
    console.error("User not found!")
    return
  }
  // use Object.assign to update the found user in place
  Object.assign(foundUser, updates)
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser
  }
  users.push(user)
  return user
}

// example add usage:
addNewUser({ username: "joe_schmoe", role: "member" })

// example updates:
// updateUser(1, { username: "new_john_doe" })
// updateUser(3, { role: "member" })

