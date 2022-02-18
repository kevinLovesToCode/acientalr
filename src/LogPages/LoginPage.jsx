import { useState, useEffect } from "react";
import "./../../src/home.css";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [UserInput, setUserInput] = useState("");
  return (
    <div className="home">
      <input
        type="password"
        onChange={(event) => {
          const userValue = event.target.value;
          setUserInput(userValue);
        }}
      />
      <hr />
      <button
        onClick={() => {
          if (UserInput === "kevkev") {
            sessionStorage.setItem("isLoggedIn", "true");
            console.log("LOGGED INT");

            setisLoggedIn(true);
            navigate("/");
          } else {
            alert("Wrong Password!");
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
