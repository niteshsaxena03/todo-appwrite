import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { account } from "../appwrite/appwriteConfig"
function Login() {
  const [user,setUser]=useState({
    email:"",
    password:"",
  })
  return (
    <div>
      Login
    </div>
  )
}

export default Login
