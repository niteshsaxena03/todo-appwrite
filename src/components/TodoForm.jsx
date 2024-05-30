import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "../appwrite/appwriteConfig";

function TodoForm() {
  const [todo, setTodo] = useState("");
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const promise = databases.createDocument("66540de80019205fb8f5",uuidv4,{todo});

    promise.then(
      function(response){
        console.log(response);
      },
      function(error){
        console.log(error);
      }
    )
    window.location.reload();
  }
  return (
  <div>TodoForm</div>
  )
}

export default TodoForm;
