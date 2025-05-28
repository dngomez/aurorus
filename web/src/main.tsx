import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./index.css"
import { Landing } from "./Landing.tsx"
import { Layout } from "./Layout.tsx"
import { Book } from "./Book/Book.tsx"
import { About } from "./About/About.tsx"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { Menu } from "./Menu/Menu.tsx"

export const GOOGLE_ID =
  "903378574791-73hj05psel9io872klp7qe33bqkt229g.apps.googleusercontent.com"

let router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    Component: Layout,
    children: [
      {
        path: "/reservas",
        index: true,
        Component: Book,
      },
      {
        path: "/nosotros",
        index: true,
        Component: About,
      },
      {
        path: "/carta",
        index: true,
        Component: Menu,
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
