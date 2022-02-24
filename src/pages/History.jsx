import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";
import "./../../src/App.css";

function History({ isDark }) {
  const [isLoggedIn, setisLoggedIn] = useState("");
  useEffect(() => {
    setisLoggedIn(data);
    console.log(data);
  }, []);
  const data = sessionStorage.getItem("isLoggedIn");

  if (data === "true") {
    if (isDark === true) {
      return (
        <div className="homehomeDark">
          <img className="imageBackground" src={require("./../history.jpg")} />
          <img className="defaultImage" src={require("./../history.jpg")} />

          <div className="text">
            Mesopotamia is a region of southwest Asia in the Tigris and
            Euphrates river system that benefitted from the area’s climate and
            geography to host the beginnings of human civilization. Its history
            is marked by many important inventions that changed the world,
            including the concept of time, math, the wheel, sailboats, maps and
            writing. Mesopotamia is also defined by a changing succession of
            ruling bodies from different areas and cities that seized control
            over a period of thousands. The word Mesopotamia also means "Land
            between rivers" in greek. Mesopotamia also faced problem with there
            land, because of the water constantly flooding in, they have to work
            with a contraption.
          </div>
        </div>
      );
    } else {
      return (
        <div className="homehomeLight">
          <img className="imageBackground" src={require("./../history.jpg")} />
          <img className="defaultImage" src={require("./../history.jpg")} />

          <div className="text">
            Mesopotamia is a region of southwest Asia in the Tigris and
            Euphrates river system that benefitted from the area’s climate and
            geography to host the beginnings of human civilization. Its history
            is marked by many important inventions that changed the world,
            including the concept of time, math, the wheel, sailboats, maps and
            writing. Mesopotamia is also defined by a changing succession of
            ruling bodies from different areas and cities that seized control
            over a period of thousands. The word Mesopotamia also means "Land
            between rivers" in greek. Mesopotamia also faced problem with there
            land, because of the water constantly flooding in, they have to work
            with a contraption.
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to="/kevinmesopotamia/login" />;
  }
}

export default History;
