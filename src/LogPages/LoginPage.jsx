import { useState, useEffect } from "react";
import "./../../src/home.css";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [UserInput, setUserInput] = useState("");
  return (
    <>
      <div className="title">
        <h2>Welcome! Please log in to access the info after.</h2>
      </div>

      <div className="home">
        <div>
          <center>Login to Access the info below</center>

          <hr></hr>
          <input
            type="password"
            onChange={(event) => {
              const userValue = event.target.value;
              setUserInput(userValue);
            }}
          />
          <button
            onClick={() => {
              if (UserInput === "kevkev") {
                sessionStorage.setItem("isLoggedIn", "true");
                console.log("LOGGED INT");

                setisLoggedIn(true);
                navigate("/kevinmesopotamia/");
              } else {
                alert("Wrong Password!");
              }
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
