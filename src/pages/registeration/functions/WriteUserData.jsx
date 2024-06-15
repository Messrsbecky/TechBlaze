// addition
import { useState } from "react";
import { writeUserData } from "./database";

const WriteUserData = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    writeUserData(userId, password, email);
    alert("Data written successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Write User Data</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Write Data</button>
    </form>
  );
};

export default WriteUserData;
