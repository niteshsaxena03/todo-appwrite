import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { account } from "../appwrite/appwriteConfig";

function Todo() {
  const navigate=useNavigate();

  const [userDetails,setUserDetails]=useState();
  

  //all changes within useEffect hook
  useEffect(() => {
    const getData=account.get();

    getData.then(
      function(response){
        setUserDetails(response);
      },
      function(error){
        console.log(error);
      }
    )
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <div>
      <h1>Todo</h1> 
    </div>
  )
}

export default Todo
