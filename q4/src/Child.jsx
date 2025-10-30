import { useState } from "react";

export default function Child({ onUpdate }) {
  const [childMsg, setChildMsg] = useState("");

  const sendToParent = () => {
    onUpdate(childMsg); 
    setChildMsg(""); 
  };

  return (
    <div style={{ border: "2px solid green", padding: "15px", marginTop: "10px" }}>
      <h3>Child Component</h3>
      <input
        type="text"
        value={childMsg}
        onChange={(e) => setChildMsg(e.target.value)}
        placeholder="Enter new message for parent"
      />
      <button onClick={sendToParent} style={{ marginLeft: "10px" }}>
        Update Parent
      </button>
    </div>
  );
}
