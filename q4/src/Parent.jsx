import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [message, setMessage] = useState("Hello from Parent!");


  const updateMessage = (newMsg) => {
    setMessage(newMsg);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "20px", margin: "10px" }}>
      <h2>Parent Component</h2>
      <p><strong>Message:</strong> {message}</p>

     
      <Child onUpdate={updateMessage} />
    </div>
  );
}
