import React, { useState, useEffect } from "react";
import { BsLightbulbFill, BsMoonStarsFill } from "react-icons/bs";
import { AiFillBook } from "react-icons/ai";

import { Routes, Route, Redirect, Navigate } from "react-router-dom";
import { Navbar, Container, Nav, Accordion } from "react-bootstrap";
import Home from "./pages/Home";
import History from "./pages/History";
import Error from "./LogPages/Error";
import LoginPage from "./LogPages/LoginPage";
const Farming = ({ isLightMode }) => {
  const [isLoggedIn, setisLoggedIn] = useState("");
  useEffect(() => {
    setisLoggedIn(data);
    console.log(data);
  }, []);
  const data = sessionStorage.getItem("isLoggedIn");

  if (data === "true") {
    if (isLightMode === true) {
      return (
        <div className="lo">
          <div className="farmRoomDark">
            <div className="title">
              <h1>Farming</h1>
            </div>
            <p className="content">
              The constant flooding in the land of Mesopotamia caused the crops
              that they grown to be destroyed so they have to find a solution.
              Good thing they found a quick solution they made decided to
              irrigate the water with canals which become the roadways of the
              land. They also built dikes to prevent the flooding into the
              crops. This way, they quickly grew crops. Over the growth of the
              text they got a lot of population, the Mesopotamia's became super
              popular they had to constantly get food. Which demanded more
              water. Over the years, the irrigation system was later found to be
              a flaw, because of the water that constantly shipped the salt,
              which ended up destroying all the crops, so now they either have
              to move to a different area or they have to die. There way of
              farming is one of the best if it wasn't for the salt. Because of
              there location it is really hard for them to control the water,
              especially the tight overflow and excessive water causing salt.
              There irrigation system has been reworked more then once and has
              been further improved. But at the end there is still flaws about
              the irrigation system and failed which making the Ancient
              Mesopotamia's civilization ended. According to the British Museum,
              early Mesopotamian farmers’ main crops were barley and wheat. But
              they also created gardens shaded by date palms, where they
              cultivated a wide variety of crops including beans, peas, lentils,
              cucumbers, leeks, lettuce and garlic, as well as fruit such as
              grapes, apples, melons and figs. They also milked sheep, goats and
              cows to make butter, and slaughtered them for meat. Eventually,
              the agricultural revolution in Mesopotamia led to what Diamond
              describes as the next big step in progress, the Urban Revolution.
              Roughly 5,000 to 6,000 years ago in Sumer, villages evolved into
              cities. One of the earliest and most prominent was Uruk, a walled
              community with 40,000 to 50,000 inhabitants. Others included
              Eridu, Bad-tibira, Sippar, and Shuruppak, according to the Ancient
              History Encyclopedia. The Sumerians developed may have been the
              earliest system of writing as well as sophisticated art,
              architecture, and complex government bureaucracies to supervise
              agriculture, commerce and religious activity. Sumer also became a
              hotbed of innovation, as the Sumerians took inventions that other
              ancient peoples developed, from pottery to textile weaving, and
              figured out how to do them on an industrial scale. Meanwhile,
              Upper Mesopotamia developed its own urban areas such as Tepe
              Gawra, where researchers have discovered brick temples with
              intricate recesses and pilasters, and found other evidence of a
              sophisticated culture.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>Agriculture</h5>
            </div>
            <p className="content t">
              Agriculture is the ratio main economic activity in ancient
              Mesopotamia. Operating under harsh constraints, notably the arid
              <img src={require("./agr.jpg")} />
              climate, the Mesopotamian farmers developed effective strategies
              that enabled them to support the development of the first states,
              the first cities, and then the first known empires, under the
              supervision of the institutions which dominated the economy: the
              royal and provincial palaces, the temples, and the domains of the
              elites. They focused above all on the cultivation of cereals
              (particularly barley) and sheep farming, but also farmed legumes,
              as well as date palms in the south and grapes in the north. In
              reality, there were two types of Mesopotamian agriculture,
              corresponding to the two main ecological domains, which largely
              overlapped with cultural distinctions. The agriculture of southern
              or Lower Mesopotamia, the land of Sumer and Akkad, which later
              became Babylonia received almost no rain and required large scale
              irrigation works which were supervised by temple estates, but
              could produce high returns. The agriculture of Northern or Upper
              Mesopotamia, the land that would eventually become Assyria, had
              enough rainfall to allow dry agriculture most of the time so that
              irrigation and large institutional estates were less important,
              but the returns were also usually lower. They also invented the
              plow and with the help of the ox they can increase there farming
              speed by alot.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>Irragation</h5>
            </div>
            <p className="content t">
              Because of the large amount of water constantly flooding
              <img src={require("./irragation.jpg")} />
              in they have to use irrigation to manage the water to The first
              ever signs of this was back arond in 6000 BC at Choga Mami which
              is a place in the center of Mesopotmia. During this time they
              decided to use irrigation as a way to control water and also make
              better changes to the farms. This not only brought a lot of food,
              this also allowed water to go to places which became the rail road
              of Acient Mesopotmaia. The railroad allowed the Kanels to travel
              faster and was a really good rail road.
            </p>
            <div className="br"></div>

            <div className="title">
              <h5>Flaw</h5>
            </div>
            <p className="content t">
              The flaw inside the acient mesopotamia farming is quite big. First
              the
              <img src={require("./fail.jpg")} />
              irrigation system has many flaws, because of the water it causes
              the land to grow salt causing the crops to die out. The incease of
              food also lead to more and more peopel to come here which also
              meant that the food resourse are more and more demanding. With
              this the farmers have to plow and seed the farm alot leading to
              another flaw in the system. The water can get inside more and with
              that causes more salt and then the crops all die out. This is how
              the Acient Mesopotmia ended.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="lo">
          <div className="farmRoomLight">
            <div className="title">
              <h1>Farming</h1>
            </div>
            <p className="content">
              The constant flooding in the land of Mesopotamia caused the crops
              that they grown to be destroyed so they have to find a solution.
              Good thing they found a quick solution they made decided to
              irrigate the water with canals which become the roadways of the
              land. They also built dikes to prevent the flooding into the
              crops. This way, they quickly grew crops. Over the growth of the
              text they got a lot of population, the Mesopotamia's became super
              popular they had to constantly get food. Which demanded more
              water. Over the years, the irrigation system was later found to be
              a flaw, because of the water that constantly shipped the salt,
              which ended up destroying all the crops, so now they either have
              to move to a different area or they have to die. There way of
              farming is one of the best if it wasn't for the salt. Because of
              th4re location it is really hard for them to control the water,
              especially the tight overflow and excessive water causing salt.
              There irrigation system has been reworked more then once and has
              been further improved. But at the end there is still flaws about
              the irrigation system and failed which making the Ancient
              Mesopotamia's civilization ended. According to the British Museum,
              early Mesopotamian farmers’ main crops were barley and wheat. But
              they also created gardens shaded by date palms, where they
              cultivated a wide variety of crops including beans, peas, lentils,
              cucumbers, leeks, lettuce and garlic, as well as fruit such as
              grapes, apples, melons and figs. They also milked sheep, goats and
              cows to make butter, and slaughtered them for meat. Eventually,
              the agricultural revolution in Mesopotamia led to what Diamond
              describes as the next big step in progress, the Urban Revolution.
              Roughly 5,000 to 6,000 years ago in Sumer, villages evolved into
              cities. One of the earliest and most prominent was Uruk, a walled
              community with 40,000 to 50,000 inhabitants. Others included
              Eridu, Bad-tibira, Sippar, and Shuruppak, according to the Ancient
              History Encyclopedia. The Sumerians developed may have been the
              earliest system of writing as well as sophisticated art,
              architecture, and complex government bureaucracies to supervise
              agriculture, commerce and religious activity. Sumer also became a
              hotbed of innovation, as the Sumerians took inventions that other
              ancient peoples developed, from pottery to textile weaving, and
              figured out how to do them on an industrial scale. Meanwhile,
              Upper Mesopotamia developed its own urban areas such as Tepe
              Gawra, where researchers have discovered brick temples with
              intricate recesses and pilasters, and found other evidence of a
              sophisticated culture.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>Agriculture</h5>
            </div>
            <p className="content t">
              Agriculture is the ratio main economic activity in ancient
              Mesopotamia. Operating under harsh constraints, notably the arid
              <img src={require("./agr.jpg")} />
              climate, the Mesopotamian farmers developed effective strategies
              that enabled them to support the development of the first states,
              the first cities, and then the first known empires, under the
              supervision of the institutions which dominated the economy: the
              royal and provincial palaces, the temples, and the domains of the
              elites. They focused above all on the cultivation of cereals
              (particularly barley) and sheep farming, but also farmed legumes,
              as well as date palms in the south and grapes in the north. In
              reality, there were two types of Mesopotamian agriculture,
              corresponding to the two main ecological domains, which largely
              overlapped with cultural distinctions. The agriculture of southern
              or Lower Mesopotamia, the land of Sumer and Akkad, which later
              became Babylonia received almost no rain and required large scale
              irrigation works which were supervised by temple estates, but
              could produce high returns. The agriculture of Northern or Upper
              Mesopotamia, the land that would eventually become Assyria, had
              enough rainfall to allow dry agriculture most of the time so that
              irrigation and large institutional estates were less important,
              but the returns were also usually lower. They also invented the
              plow and with the help of the ox they can increase there farming
              speed by alot.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>Irragation</h5>
            </div>
            <p className="content t">
              Because of the large amount of water constantly flooding
              <img src={require("./irragation.jpg")} />
              in they have to use irrigation to manage the water to The first
              ever signs of this was back arond in 6000 BC at Choga Mami which
              is a place in the center of Mesopotmia. During this time they
              decided to use irrigation as a way to control water and also make
              better changes to the farms. This not only brought a lot of food,
              this also allowed water to go to places which became the rail road
              of Acient Mesopotmaia. The railroad allowed the Kanels to travel
              faster and was a really good rail road.
            </p>
            <div className="br"></div>

            <div className="title">
              <h5>Flaw</h5>
            </div>
            <p className="content t">
              The flaw inside the acient mesopotamia farming is quite big. First
              the
              <img src={require("./fail.jpg")} />
              irrigation system has many flaws, because of the water it causes
              the land to grow salt causing the crops to die out. The incease of
              food also lead to more and more people to come here which also
              meant that the food resource are more and more demanding. With
              this the farmers have to plow and seed the farm alot leading to
              another flaw in the system. The water can get inside more and with
              that causes more salt and then the crops all die out. This is how
              the Acient Mesopotmia ended.
            </p>
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to="/login" />;
  }
};

const Military = ({ isDark }) => {
  const [isLoggedIn, setisLoggedIn] = useState("");
  useEffect(() => {
    setisLoggedIn(data);
    console.log(data);
  }, []);
  const data = sessionStorage.getItem("isLoggedIn");

  if (data === "true") {
    if (isDark === true) {
      return (
        <div className="lo">
          <div className="farmRoomDark">
            <div className="title">
              <h1>Military</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              In Acient Mesopotamia, there was no standing army, although there
              <img src={require("./war.jfif")} />
              may have been only a few professional soldiers. When the king,
              high priest and council of elders decided the need of war to
              create peace, they call all free male citzens to arm. Each citzen
              had to bring its own weapons. Common weapons included bows,
              spears, slingshots, battle axes, maces, and knives. This allow
              them to get a advantage over a fight. The most outstanding
              advantage is there protective armour. Back then protective armour
              was really rare back then. Although they all carried shields the
              protective armour gave them the biggest the advantage. Some
              professional soldiers wore helmets of copper which protected them
              to flying stones.
            </p>
            <div className="br"></div>

            <div className="title">
              <h5>Weapons</h5>
            </div>
            <p className="content">
              They use to have only swords and daggers, this allowed very fast
              movement since they are not as heavy as others.The ceremonial
              dagger
              <img src={require("./swords.jpg")} />
              in Figure 1 is Sumerian and dates to c. 2500 BCE. It weighs c. 34
              oz (950 g). The length of the dagger is c. 10 in (25 cm). The
              double-edged blade is made of gold. The hilt is made from lapis
              lazuli gemstones decorated with gold. The intricate geometric
              design of the sheath is remarkable. The dagger is most likely
              belonged to the Sumerian Queens. Sadly she died around 2500 BCE
              and she carried it on her eternal afterlife. The dagger can still
              be found in Ur(mom) Iraq.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>Body Armour</h5>
            </div>
            <p className="content">
              During the time of inovating the Body Armour it was the Assyrian
              Empire, which is still considered in Acient Mesopotamia,
              <img src={require("./helmet.jpg")} />
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="lo">
          <div className="farmRoomLight">
            <div className="title">
              <h1>Military</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              In Acient Mesopotamia, there was no standing army, although there
              <img src={require("./war.jfif")} />
              may have been only a few professional soldiers. When the king,
              high priest and council of elders decided the need of war to
              create peace, they call all free male citzens to arm. Each citzen
              had to bring its own weapons. Common weapons included bows,
              spears, slingshots, battle axes, maces, and knives. This allow
              them to get a advantage over a fight. The most outstanding
              advantage is there protective armour. Back then protective armour
              was really rare back then. Although they all carried shields the
              protective armour gave them the biggest the advantage. Some
              professional soldiers wore helmets of copper which protected them
              to flying stones.
            </p>
            <div className="br"></div>

            <div className="title">
              <h5>Weapons</h5>
            </div>
            <p className="content">
              They use to have only swords and daggers, this allowed very fast
              movement since they are not as heavy as others.The ceremonial
              dagger
              <img src={require("./swords.jpg")} />
              in Figure 1 is Sumerian and dates to c. 2500 BCE. It weighs c. 34
              oz (950 g). The length of the dagger is c. 10 in (25 cm). The
              double-edged blade is made of gold. The hilt is made from lapis
              lazuli gemstones decorated with gold. The intricate geometric
              design of the sheath is remarkable. The dagger is most likely
              belonged to the Sumerian Queens. Sadly she died around 2500 BCE
              and she carried it on her eternal afterlife. The dagger can still
              be found in Ur(mom) Iraq.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>Body Armour</h5>
            </div>
            <p className="content">
              During the time of inovating the Body Armour it was the Assyrian
              Empire, which is still considered in Acient Mesopotamia,
              <img src={require("./helmet.jpg")} />
            </p>
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  const [IsDark, setIsDark] = useState(true);
  const [IsSetDark, setIsSetDark] = useState("Dark");
  const [isLoggedIn, setisLoggedIn] = useState(() => {
    localStorage.getItem("isLoggedIn");
    console.log(localStorage.getItem("isLoggedin"));
  });

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <AiFillBook />
            |Kevin's Mesopotamia
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/history">History</Nav.Link>

            <Nav.Link href="/farming">Farming</Nav.Link>
            <Nav.Link href="/military">Military</Nav.Link>
            <Nav.Link href="/socialclass">Social Class</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <button onClick={() => setDark(IsDark, setIsDark, setIsSetDark)}>
              <BsLightbulbFill />/<BsMoonStarsFill />
            </button>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/farming" element={<Farming isLightMode={IsDark} />} />
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History isDark={IsDark} />} />
        <Route path="/military" element={<Military isDark={IsDark} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
function setDark(IsDark, SetIsDark, setButtonText) {
  if (IsDark === true) {
    setButtonText("Dark");

    SetIsDark(false);
  } else {
    setButtonText("Light");

    SetIsDark(true);
  }
}

export default App;
