import { useState } from "react";
import "./loginPage.css";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="login">
      <form onSubmit={signUp}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={signUp} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginPage;
