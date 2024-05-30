import { useState, useEffect } from "react";
import { databases } from "../appwrite/appwriteConfig";

function Todo() {
  const [todos, setTodos] = useState([]); // Initialize as an empty array
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoader(true);
      try {
        const response = await databases.listDocuments(
          "66540dcf001fc3983bb5",
          "66540de80019205fb8f5"
        );
        setTodos(response.documents); // This will return an array
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };

    fetchTodos();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {todos.map((item) => (
            <div key={item.$id}>
              <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                <div>
                  <p>{item["todo-string"]}</p>{" "}
                  {/* Ensure this matches the attribute name */}
                </div>
                <div>
                  <span className="text-red-400 cursor-pointer">Delete</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todo;
