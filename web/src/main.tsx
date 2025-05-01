import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./index.css"
import { Landing } from "./Landing.tsx"
import { Layout } from "./Layout.tsx"
import { Home } from "./Home.tsx"
import { Book } from "./Book/Book.tsx"
import { About } from "./About.tsx"
import { GoogleOAuthProvider } from "@react-oauth/google"

export const GOOGLE_ID =
  "903378574791-73hj05psel9io872klp7qe33bqkt229g.apps.googleusercontent.com"

let router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/home",
    Component: Layout,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "/reservas",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Book,
      },
    ],
  },
  {
    path: "/nosotros",
    Component: Layout,
    children: [
      {
        index: true,
        Component: About,
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
)
