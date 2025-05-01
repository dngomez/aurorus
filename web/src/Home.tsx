import { useState, useEffect } from "react"
import { getHome } from "./strapi/home"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { GoogleLogin } from "@react-oauth/google"
import { getUser, setUser } from "./lib/user"

export function Home() {
  const [currentUser, setCurrentUser] = useState(getUser())
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState([])
  const [image, setImage] = useState("")

  console.log(currentUser)

  useEffect(() => {
    async function fetchData() {
      const { title, description, image } = await getHome()
      setTitle(title)
      setDescription(description)
      setImage(image)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <BlocksRenderer content={description} />
      {/* <img src={image} alt="" /> */}

      <GoogleLogin
        theme="filled_black"
        size="medium"
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
          setCurrentUser(setUser(credentialResponse.credential))
        }}
        onError={() => {
          console.log("Login Failed")
        }}
      />
    </div>
  )
}
