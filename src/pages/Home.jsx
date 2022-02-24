import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./../../src/home.css";

function Home() {
  const [isLoggedIn, setisLoggedIn] = useState("");
  useEffect(() => {
    setisLoggedIn(data);
    console.log(data);
  }, []);
  const data = sessionStorage.getItem("isLoggedIn");

  if (data === "true") {
    return (
      <div className="home">
        <div className="title">
          <h1>Acient Mesopotamia</h1>
          <button>
            <a href="/kevinmesopotamia/history">Get Started</a>
          </button>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/kevinmesopotamia/login" />;
  }
}

export default Home;
