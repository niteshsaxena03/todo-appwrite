import { useState } from "react"
import {account} from '../appwrite/appwriteConfig';
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from  'uuid';


function SignUp() {
  const navigation=useNavigate();
  
  //creating basic structure of user object for signup purpose
  const [user,setUser]=useState({
    name:'',
    email: '',
    password: ''
  })
  return (
    <div>
      SignUp
    </div>
  )
}

export default SignUp
