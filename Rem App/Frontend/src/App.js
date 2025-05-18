
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [reminder, setReminder] = useState({
    message: "",
    date: "",
    time: "",
    type: "email",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setReminder({ ...reminder, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/reminder/create", reminder);
      console.log("Success:", response.data); // log complete response
      setStatusMessage("✅ Reminder saved successfully!");
      setReminder({ message: "", date: "", time: "", type: "email" });
    } catch (err) {
      console.error("Error:", err.response?.data || err.message); // log full error
      setStatusMessage("❌ Error saving reminder. Please try again.");
    }
  };

  return (
   <div style={{ 
  maxWidth: "500px", 
  margin: "3rem auto", 
  padding: "2rem", 
  border: "1px solid #e0e0e0", 
  borderRadius: "12px", 
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)", 
  backgroundColor: "#fff", 
  fontFamily: "Segoe UI, sans-serif" 
}}>
  <h2 style={{ 
    textAlign: "center", 
    marginBottom: "2rem", 
    color: "#2c3e50" 
  }}>
    Reminder App
  </h2>

  {/* Status message display */}
  {statusMessage && (
    <div style={{ 
      marginBottom: "1.5rem", 
      padding: "0.75rem", 
      borderRadius: "6px", 
      backgroundColor: statusMessage.startsWith("✅") ? "#d4edda" : "#f8d7da", 
      color: statusMessage.startsWith("✅") ? "#155724" : "#721c24", 
      border: statusMessage.startsWith("✅") ? "1px solid #c3e6cb" : "1px solid #f5c6cb" 
    }}>
      {statusMessage}
    </div>
  )}

  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Message:</label>
      <input 
        name="message" 
        value={reminder.message} 
        onChange={handleChange} 
        required
        style={{
          padding: "0.75rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "1rem"
        }}
      />
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Date:</label>
      <input 
        type="date" 
        name="date" 
        value={reminder.date} 
        onChange={handleChange} 
        required
        style={{
          padding: "0.75rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "1rem"
        }}
      />
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Time:</label>
      <input 
        type="time" 
        name="time" 
        value={reminder.time} 
        onChange={handleChange} 
        required
        style={{
          padding: "0.75rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "1rem"
        }}
      />
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Reminder Type:</label>
      <select 
        name="type" 
        value={reminder.type} 
        onChange={handleChange}
        style={{
          padding: "0.75rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "1rem"
        }}
      >
        <option value="email">Email</option>
        <option value="sms">SMS</option>
      </select>
    </div>

    <button 
      type="submit"
      style={{
        marginTop: "1rem",
        padding: "0.75rem",
        backgroundColor: "#3498db",
        color: "#fff",
        fontWeight: "bold",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer",
        transition: "background-color 0.3s ease"
      }}
      onMouseOver={e => e.target.style.backgroundColor = "#2980b9"}
      onMouseOut={e => e.target.style.backgroundColor = "#3498db"}
    >
      Set Reminder
    </button>

    
  </form>
</div>
  )
}  

export default App;
