import { jwtDecode } from "jwt-decode"

export function getUser() {
  const token = sessionStorage.getItem("token")
  if (token) {
    return jwtDecode(token)
  } else {
    return null
  }
}

export function removeUser() {
  sessionStorage.removeItem("token")
}

export function setUser(token: string | undefined) {
  if (!token) {
    removeUser()
    return null
  } else {
    sessionStorage.setItem("token", token)
    return jwtDecode(token)
  }
}
