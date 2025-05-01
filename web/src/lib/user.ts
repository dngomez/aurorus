import { jwtDecode } from "jwt-decode"

export function getUser() {
  const token = localStorage.getItem("token")
  if (token) {
    return jwtDecode(token)
  } else {
    return null
  }
}

export function removeUser() {
  localStorage.removeItem("token")
}

export function setUser(token: string | undefined) {
  if (!token) {
    removeUser()
    return null
  } else {
    localStorage.setItem("token", token)
    return jwtDecode(token)
  }
}
