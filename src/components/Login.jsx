import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { account } from "../appwrite/appwriteConfig"
function Login() {
  const navigation = useNavigate();
  const [user,setUser]=useState({
    email:"",
    password:"",
  })

  //main login function below
  const loginUser=async (e)=>{
    e.preventDefault()
    try{
      await account.createEmailPasswordSession(user.email,user.password);
      navigation('/profile');
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      Login
    </div>
  )
}

export default Login
