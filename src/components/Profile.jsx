import { account } from "../appwrite/appwriteConfig";
import { useNavigate,Link } from "react-router-dom";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useState,useEffect } from "react";

function Profile() {
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

    //function to log out user
    function handleLogOut=async()=>{
      try{
        await account.deleteSession("current");
        navigate("/");
      }catch(error){
        console.log(error);
      }
    }
  }, []);
  
  return (
    <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button className="bg-red-400 text-white p-1 rounded-md" onClick={handleLogOut}>
                Logout
              </button>
            </div>
          </div>
          <TodoForm />
          <Todo />
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  );
}

export default Profile;
