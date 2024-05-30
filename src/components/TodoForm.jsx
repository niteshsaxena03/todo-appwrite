import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "../appwrite/appwriteConfig";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (todo.trim() === "") {
      alert("Todo cannot be empty");
      return;
    }

    try {
      // Debug: Print the data to be sent
      console.log("Creating document with data:", { todo });

      const response = await databases.createDocument(
        "66540dcf001fc3983bb5", // Replace with your database ID
        "66540de80019205fb8f5", // Replace with your collection ID
        uuidv4(), // Unique document ID
        { "todo-string": todo } // Data object with the required fields
      );

      console.log("Document created successfully:", response);
      setTodo(""); // Reset the input field
    } catch (error) {
      console.error("Error creating document:", error);
      alert("An error occurred while adding your todo. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
