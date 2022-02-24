import React, { useState, useEffect } from "react";
import { BsLightbulbFill, BsMoonStarsFill } from "react-icons/bs";
import { AiFillBook } from "react-icons/ai";

import { Routes, Route, Redirect, Navigate } from "react-router-dom";
import { Navbar, Container, Nav, Accordion } from "react-bootstrap";
import Home from "./pages/Home";
import History from "./pages/History";
import Error from "./LogPages/Error";
import LoginPage from "./LogPages/LoginPage";
const Arch = ({ isLightMode }) => {
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
              <h1>Architecture</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./as.jpg")} />
              The ziggurat's architecture is ziggurat, pyramidal stepped temple
              tower that is an architectural and religious structure
              characteristic of the major cities of Mesopotamia (now mainly in
              Iraq) from approximately 2200 until 500 BCE. The ziggurat was
              always built with a core of mud brick and an exterior covered with
              baked brick. It had no internal chambers and was usually square or
              rectangular, averaging either 170 feet (50 metres) square or 125 ×
              170 feet (40 × 50 metres) at the base. Approximately 25 ziggurats
              are known, being equally divided among Sumer, Babylonia, and
              Assyria. No ziggurat is preserved to its original height. Ascent
              was by an exterior triple stairway or by a spiral ramp, but for
              almost half of the known ziggurats, no means of ascent has been
              discovered. The sloping sides and terraces were often landscaped
              with trees and shrubs (hence the Hanging Gardens of Babylon). The
              best-preserved ziggurat is at Ur (modern Tall al-Muqayyar, Iraq).
              The largest, at Choghā Zanbīl in Elam (now in southwestern Iran),
              is 335 feet (102 metres) square and 80 feet (24 metres) high and
              stands at less than half its estimated original height. A
              ziggurat, apparently of great antiquity, is located at Tepe Sialk
              in modern Kāshān, Iran. The legendary Tower of Babel has been
              popularly associated with the ziggurat of the great temple of
              Marduk in Babylon.
            </p>
            <div className="br"></div>
            <div className="title">
              <h6>Babylon architectural design</h6>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./11.png")} />
              The Mesopotamians regarded “the craft of building” as a divine
              gift taught to men by the gods, and architecture flourished in the
              region. A paucity of stone in the region made sun baked bricks and
              clay the building material of choice. Babylonian architecture
              featured pilasters and columns , as well as frescoes and enameled
              tiles. Assyrian architects were strongly influenced by the
              Babylonian style , but used stone as well as brick in their
              palaces, which were lined with sculptured and colored slabs of
              stone instead of being painted. Existing ruins point to
              load-bearing architecture as the dominant form of building.
              However, the invention of the round arch in the general area of
              Mesopotamia influenced the construction of structures like the
              Ishtar Gate in the sixth century BCE.
            </p>
            <div className="br"></div>
            <div className="title">
              <h6>ziggurat designs</h6>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./zigurat-ur-composicion.jpg")} />
              This is the ziggurat, a stepped pyrmid, its represented with the
              different social classes, the preists and goverment officals can
              be on the second top level. In every level, there are always a
              different level where you can walk and play on. At the top level
              is where they worship the god with food and other stuff. The rest
              of the layers represent the middle, high, and slavery classes.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="lo">
          <div className="farmRoomLight">
            <div className="title">
              <h1>architecture</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./as.jpg")} />
              The ziggurat's architecture is ziggurat, pyramidal stepped temple
              tower that is an architectural and religious structure
              characteristic of the major cities of Mesopotamia (now mainly in
              Iraq) from approximately 2200 until 500 BCE. The ziggurat was
              always built with a core of mud brick and an exterior covered with
              baked brick. It had no internal chambers and was usually square or
              rectangular, averaging either 170 feet (50 metres) square or 125 ×
              170 feet (40 × 50 metres) at the base. Approximately 25 ziggurats
              are known, being equally divided among Sumer, Babylonia, and
              Assyria. No ziggurat is preserved to its original height. Ascent
              was by an exterior triple stairway or by a spiral ramp, but for
              almost half of the known ziggurats, no means of ascent has been
              discovered. The sloping sides and terraces were often landscaped
              with trees and shrubs (hence the Hanging Gardens of Babylon). The
              best-preserved ziggurat is at Ur (modern Tall al-Muqayyar, Iraq).
              The largest, at Choghā Zanbīl in Elam (now in southwestern Iran),
              is 335 feet (102 metres) square and 80 feet (24 metres) high and
              stands at less than half its estimated original height. A
              ziggurat, apparently of great antiquity, is located at Tepe Sialk
              in modern Kāshān, Iran. The legendary Tower of Babel has been
              popularly associated with the ziggurat of the great temple of
              Marduk in Babylon.
            </p>
            <div className="br"></div>
            <div className="title">
              <h6>Babylon architectural design</h6>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./11.png")} />
              The Mesopotamians regarded “the craft of building” as a divine
              gift taught to men by the gods, and architecture flourished in the
              region. A paucity of stone in the region made sun baked bricks and
              clay the building material of choice. Babylonian architecture
              featured pilasters and columns , as well as frescoes and enameled
              tiles. Assyrian architects were strongly influenced by the
              Babylonian style , but used stone as well as brick in their
              palaces, which were lined with sculptured and colored slabs of
              stone instead of being painted. Existing ruins point to
              load-bearing architecture as the dominant form of building.
              However, the invention of the round arch in the general area of
              Mesopotamia influenced the construction of structures like the
              Ishtar Gate in the sixth century BCE.
            </p>
            <div className="br"></div>
            <div className="title">
              <h6>ziggurat designs</h6>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./zigurat-ur-composicion.jpg")} />
              This is the ziggurat, a stepped pyrmid, its represented with the
              different social classes, the preists and goverment officals can
              be on the second top level. In every level, there are always a
              different level where you can walk and play on. At the top level
              is where they worship the god with food and other stuff. The rest
              of the layers represent the middle, high, and slavery classes.
            </p>
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to="/login" />;
  }
};
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
            <div className="br"></div>
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
            <div className="br"></div>

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
              Empire, which is still considered in Acient Mesopotamia, The first
              helemts was called Conical helmet, it was made in the 8th century
              BC. It is used by the Assyrians, the helmet is described to have a
              calotte helmet that rises to a point above the head. and was made
              mostly of iron due to the cheap cost. it also has a little bit of
              bronze on the bottom. Later the Cuirass was also invented as a
              type of body armour. The name of it is called Laminar Armour
              <img src={require("./Assyrian_clip_image004.jpg")} />
              This armour is used also during the warfare time.
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
              Empire, which is still considered in Acient Mesopotamia, The first
              helemts was called Conical helmet, it was made in the 8th century
              BC. It is used by the Assyrians, the helmet is described to have a
              calotte helmet that rises to a point above the head. and was made
              mostly of iron due to the cheap cost. it also has a little bit of
              bronze on the bottom. Later the Cuirass was also invented as a
              type of body armour. This armour is used also during the warfare
              time.
              <img src={require("./Assyrian_clip_image004.jpg")} />
            </p>
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to="/login" />;
  }
};

const Inventions = ({ isDark }) => {
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
              <h1>Inventions</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./a.jpg")} />
              The wheel was made around 4000 BC and was used widely for
              transportation, in the later game, the wheel was used for other
              purposes. This invention also helped the already working
              agriculture to be more responsive and easier to navigate. It could
              widely move crops at once making it really easy and helpful to the
              farming agriculture. It could also be good for its expansion, and
              migration, so that moving becomes easier. Other inventions are
              also really important, they also invented mathmatics to better
              calculate time, and others, and weight. They made the first ever
              times table at the time of 2000 BC. It was the first ever times
              table to be made on the world. The other inventions they made was
              writing, it was made to record and list the past, and make rules
              and notes more accessible. They also invented the first "jobs"
              which allows the kingdom to become more orgnized and make them all
              elites and not jack of all trades. So therefore the kingdom could
              grow faster. Later the inventions included the first ever gold
              rush and the that gave a chance for all the man to get rich and
              live happy lives, this also allowed them to move up the social
              class as long as they had money. They also invented the citites
              which allowed them to create groups of house and population at a
              time to make every important and shops and one place making it
              easier to navigate. They also invented the pottery allowing them
              to make a lot of fancy items which they can use to sell to others.
              The plow was also invented to make farming and agriculture more
              easier by using a Ox they can use the horns and carry it and it
              makes the farming side more efficient. The maps was also invented
              for taxtion locations and located tax payers. They also invented
              the sailboat to make navigation faster and easier by a ton. They
              also invented advanced irragation systems so that they can work
              with water ten to billions time easier.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>How did the inventions impact the nation</h5>
            </div>
            <div className="br"></div>
            <p className="content">
              Inventions, such as new tools, devices, processes, and medicines,
              have provided significant benefits to society. Inventions help
              people around the world live longer, healthier, and
              more-productive lives and provide new ways to build, move,
              communicate, heal, learn, and play.
              <iframe
                width="800"
                height="600"
                src="https://www.youtube-nocookie.com/embed/QgQ-RvCfW7s"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="lo">
          <div className="farmRoomLight">
            <div className="title">
              <h1>Inventions</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./a.jpg")} />
              The wheel was made around 4000 BC and was used widely for
              transportation, in the later game, the wheel was used for other
              purposes. This invention also helped the already working
              agriculture to be more responsive and easier to navigate. It could
              widely move crops at once making it really easy and helpful to the
              farming agriculture. It could also be good for its expansion, and
              migration, so that moving becomes easier. Other inventions are
              also really important, they also invented mathmatics to better
              calculate time, and others, and weight. They made the first ever
              times table at the time of 2000 BC. It was the first ever times
              table to be made on the world. The other inventions they made was
              writing, it was made to record and list the past, and make rules
              and notes more accessible. They also invented the first "jobs"
              which allows the kingdom to become more orgnized and make them all
              elites and not jack of all trades. So therefore the kingdom could
              grow faster. Later the inventions included the first ever gold
              rush and the that gave a chance for all the man to get rich and
              live happy lives, this also allowed them to move up the social
              class as long as they had money. They also invented the citites
              which allowed them to create groups of house and population at a
              time to make every important and shops and one place making it
              easier to navigate. They also invented the pottery allowing them
              to make a lot of fancy items which they can use to sell to others.
              The plow was also invented to make farming and agriculture more
              easier by using a Ox they can use the horns and carry it and it
              makes the farming side more efficient. The maps was also invented
              for taxtion locations and located tax payers. They also invented
              the sailboat to make navigation faster and easier by a ton. They
              also invented advanced irragation systems so that they can work
              with water ten to billions time easier.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>How did the inventions impact the nation</h5>
            </div>
            <div className="br"></div>

            <p className="content">
              Inventions, such as new tools, devices, processes, and medicines,
              have provided significant benefits to society. Inventions help
              people around the world live longer, healthier, and
              more-productive lives and provide new ways to build, move,
              communicate, heal, learn, and play.
              <iframe
                width="800"
                height="600"
                src="https://www.youtube-nocookie.com/embed/QgQ-RvCfW7s"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to="/login" />;
  }
};
function SocialClass({ isDark }) {
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
              <h1>Social Class</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              The social class for the mesopotamia is something that is very
              interesting. Because the Mesopotamia has many population. This
              made them making roles​ here is the social class, on the top we
              have a king,
              <img src={require("./social class.jpg")} />
              beneath it we have the Goverment officals/Military officals and
              the priests. They are used to advice the king and keep the
              enviorment clean and consise. Below it we have the scribes, and
              merchants and artisans, they are also called the upper and middle
              class. Below that we have the farmers/slaves, the slaves are
              captured from neighboring cities and they are all given the golden
              opputuninty to work there way up the social class. Thye believe
              that the city, land and social class has to deal with God and so
              the king, goverment officals, priests, scribes, merchants,
              farmers, and slaves was believd to be seeked and chosed by god.
              This is a way to manage the people and is able to manage and
              control peoples roles to further produce and advance more into the
              future. Althrough many people have fought and complained about
              this rule, the rule has still been respected since this is still
              agreed by the king and dynasty as one of the worth it choices, So
              they decided to keep this rule. The priests are also used to
            </p>
            <div className="br"></div>
            <div className="title">
              <h6>King</h6>
            </div>
            <div className="br"></div>
            <p className="content">
              The king is super rare and is chosen by gift from the gods and the
              king was therefore divinely chosen. The king has access to
              everything including the priests, and goverment officals. it also
              is can declare war if its really needed and only for peace at most
              times.
              <img src={require("./king.jpeg")} />
              They also do important jobs. They also help prey and feed food to
              there gods. Common Mesopotamians considered the king as the
              representative of the city’s patron god, the god’s overseer on
              earth, so to speak. A king was expected to protect his city, to
              provide law, order and justice and to be a shepherd to the people,
              ensuring that widows and orphans were cared for. Kings formed
              dynasties and leadership passed from father to son. Women, in
              general, were not involved in politics, but there are instances of
              women ruling a city.
            </p>
            <div className="br"></div>
            <div className="title">
              <h6>Priests/Goverment officals</h6>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./preists.jpg")} />
              The priests/goverment officals were equals to the king in power
              and honor. They were mediators between the gods and the people.
              Ordinary Mesopotamians looked to the priesthood to gain the favor
              of the gods, especially the patron god or goddess of their city.
              Mesopotamian Priests and priestesses had many duties and
              responsibilities, and in exchange they received respect, honor and
              creature comforts. Each city was organized around the god’s
              temple, which was a complex of buildings including the temple
              proper, chambers for the Mesopotamian priests and priestesses,
              workshops and public areas. A temple had two chief administrators.
              One, the en or chief priest, oversaw all sacred and religious
              duties of all the priests and priestesses. His or her job was to
              please the gods, to divine their will and communicate it to the
              ruler and the people. He supervised scores of other priests in
              performing sacred duties. These priests had many tasks; some cared
              for the gods by feeding and clothing them, others sang, made music
              and wrote hymns, and others still provided religious services to
              the people. Different types of priests performed purifications,
              exorcisms, treated people medically and prayed with them.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>Upper/Middle class</h5>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./upperclass.jpg")} />
              The upper classes of ancient Mesopotamia included kings and their
              families, priests and priestesses, ranking military officers,
              scribes and wealthier merchants and traders. The hereditary noble
              class were the kings, land-owning families and priests and
              priestesses and their families. Keep in mind that ancient
              Mesopotamia’s history stretches over 3000 years and includes many
              cultures: Sumerians, Akkadians, Babylonians and Assyrians. We can
              discuss these groups as one general culture as they all lived in
              the lands we call Mesopotamia and were very similar. The middle
              class have access to lower level of things of the culture such as
              iron, and cheap silk. They are not allowed to have slaves as they
              are not upper class.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>Slaves/Farmers</h5>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./labour.jfif")} />
              The slaves are controlled by kings, priests, goverment officals,
              and upper class mostly captured from neighboring citys or commited
              crimes. Slaves were bought and sold in the market and branded.
              They worked in irrigation projects, temples and palaces. In the
              Babylonian period, enslavement for debt was illegal. In fact,
              farmers could produce a food surplus, or more than they needed.
              Farmers also used irrigation to water grazing areas for cattle and
              sheep. As a result, Mesopotamians ate a variety of foods. Fish,
              meat, wheat, barley, and dates were plentiful. Slaves were bought
              and sold in the market and branded. They worked in irrigation
              projects, temples and palaces. In the Babylonian period,
              enslavement for debt was illegal.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="lo">
          <div className="farmRoomLight">
            <div className="title">
              <h1>Social Class</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              The social class for the mesopotamia is something that is very
              interesting. Because the Mesopotamia has many population. This
              made them making roles​ here is the social class, on the top we
              have a king,
              <img src={require("./social class.jpg")} />
              beneath it we have the Goverment officals/Military officals and
              the priests. They are used to advice the king and keep the
              enviorment clean and consise. Below it we have the scribes, and
              merchants and artisans, they are also called the upper and middle
              class. Below that we have the farmers/slaves, the slaves are
              captured from neighboring cities and they are all given the golden
              opputuninty to work there way up the social class. Thye believe
              that the city, land and social class has to deal with God and so
              the king, goverment officals, priests, scribes, merchants,
              farmers, and slaves was believd to be seeked and chosed by god.
              This is a way to manage the people and is able to manage and
              control peoples roles to further produce and advance more into the
              future. Althrough many people have fought and complained about
              this rule, the rule has still been respected since this is still
              agreed by the king and dynasty as one of the worth it choices, So
              they decided to keep this rule. The priests are also used to
            </p>
            <div className="br"></div>
            <div className="title">
              <h6>King</h6>
            </div>
            <div className="br"></div>
            <p className="content">
              The king is super rare and is chosen by gift from the gods and the
              king was therefore divinely chosen. The king has access to
              everything including the priests, and goverment officals. it also
              is can declare war if its really needed and only for peace at most
              times.
              <img src={require("./king.jpeg")} />
              They also do important jobs. They also help prey and feed food to
              there gods. Common Mesopotamians considered the king as the
              representative of the city’s patron god, the god’s overseer on
              earth, so to speak. A king was expected to protect his city, to
              provide law, order and justice and to be a shepherd to the people,
              ensuring that widows and orphans were cared for. Kings formed
              dynasties and leadership passed from father to son. Women, in
              general, were not involved in politics, but there are instances of
              women ruling a city.
            </p>
            <div className="br"></div>
            <div className="title">
              <h6>Priests/Goverment officals</h6>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./preists.jpg")} />
              The priests/goverment officals were equals to the king in power
              and honor. They were mediators between the gods and the people.
              Ordinary Mesopotamians looked to the priesthood to gain the favor
              of the gods, especially the patron god or goddess of their city.
              Mesopotamian Priests and priestesses had many duties and
              responsibilities, and in exchange they received respect, honor and
              creature comforts. Each city was organized around the god’s
              temple, which was a complex of buildings including the temple
              proper, chambers for the Mesopotamian priests and priestesses,
              workshops and public areas. A temple had two chief administrators.
              One, the en or chief priest, oversaw all sacred and religious
              duties of all the priests and priestesses. His or her job was to
              please the gods, to divine their will and communicate it to the
              ruler and the people. He supervised scores of other priests in
              performing sacred duties. These priests had many tasks; some cared
              for the gods by feeding and clothing them, others sang, made music
              and wrote hymns, and others still provided religious services to
              the people. Different types of priests performed purifications,
              exorcisms, treated people medically and prayed with them.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>Upper/Middle class</h5>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./upperclass.jpg")} />
              The upper classes of ancient Mesopotamia included kings and their
              families, priests and priestesses, ranking military officers,
              scribes and wealthier merchants and traders. The hereditary noble
              class were the kings, land-owning families and priests and
              priestesses and their families. Keep in mind that ancient
              Mesopotamia’s history stretches over 3000 years and includes many
              cultures: Sumerians, Akkadians, Babylonians and Assyrians. We can
              discuss these groups as one general culture as they all lived in
              the lands we call Mesopotamia and were very similar. The middle
              class have access to lower level of things of the culture such as
              iron, and cheap silk. They are not allowed to have slaves as they
              are not upper class.
            </p>
            <div className="br"></div>
            <div className="title">
              <h5>Slaves/Farmers</h5>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./labour.jfif")} />
              The slaves are controlled by kings, priests, goverment officals,
              and upper class mostly captured from neighboring citys or commited
              crimes. Slaves were bought and sold in the market and branded.
              They worked in irrigation projects, temples and palaces. In the
              Babylonian period, enslavement for debt was illegal. In fact,
              farmers could produce a food surplus, or more than they needed.
              Farmers also used irrigation to water grazing areas for cattle and
              sheep. As a result, Mesopotamians ate a variety of foods. Fish,
              meat, wheat, barley, and dates were plentiful. Slaves were bought
              and sold in the market and branded. They worked in irrigation
              projects, temples and palaces. In the Babylonian period,
              enslavement for debt was illegal.
            </p>
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to="/login" />;
  }
}
const SpecilizedJobs = ({ isDark }) => {
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
              <h1>Specilized Jobs</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./download.jpg")} />
              The specilized jobs are made from the social classes, depending on
              your social class you get differnt payload and different jobs and
              enviorment. Now also based on there area of work they are also
              split into different areas to work. Some live far from tghe
              ziggurat or live in one story buildings symbolizing that they are
              farmers or slaves while others that live in two story buildings
              are more rich and upper class style jobs are. The specilized jobs
              included farmers to scribes, preists to professional soilders that
              serve there nation. This allows them to instead of focusing on one
              part of the civilization they can focus on much more
              civilizations. This also lead to the rise of its civilization.
              This also made it so that acient mesopotamia is one of the best or
              most seccussful acient civilization;The larger populations of a
              city demand that more food be produced. In general, a society
              needs food surpluses before civilization can develop. Having food
              surpluses allowed some people to do other types of work besides
              farming. With food surpluses, workers can specialize in jobs that
              require special skills. For instance, Sumerian workers built
              houses, sewed clothes, created pottery, and cooperated on building
              public projects such as ziggurats and irrigation canals. With so
              many needs and such a variety of workers, some people took on the
              job of organizing society. In early Sumer, priests did that job.
              They ran society and acted as judges. In time, religion and
              government became institutions. An institution is a group of
              people who share a specific purpose. For instance, schools are
              institutions that exist to educate a population. Religion is an
              institution that helps a population meet its spiritual needs. An
              Societies must keep track of many things. For example, rulers may
              want to measure the amount of surpluses stored in the city.
              Keeping records usually involves writing, but not always. In
              Mesopotamia, people started by using wooden counting sticks.
              Later, they invented the world's first system of writing,
              cuneiform. As people learn better ways to do things, societies
              advance. The people of early Sumer learned to use canals to
              irrigate crops. They also created new tools and used new materials
              to make those tools. For instance, the Sumerians began to make
              tools out of bronze. Bronze tools replaced tools made of copper, a
              softer metal.Civilization is closely linked to life in cities. At
              first, cities became important because farmers needed a place to
              store and trade their surplus grain. As cities grew, however, they
              began to offer other advantages such as temples to pray in and
              protection from outside threats. Because of the various services
              that a city provided, for those in search of a job, cities also
              offered many different types of work.
              <img src={require("./3074576.jpg")} />
              army is an institution that helps a society meet its security
              needs.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="lo">
          <div className="farmRoomLight">
            <div className="title">
              <h1>Specilized Jobs</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./download.jpg")} />
              The specilized jobs are made from the social classes, depending on
              your social class you get differnt payload and different jobs and
              enviorment. Now also based on there area of work they are also
              split into different areas to work. Some live far from tghe
              ziggurat or live in one story buildings symbolizing that they are
              farmers or slaves while others that live in two story buildings
              are more rich and upper class style jobs are. The specilized jobs
              included farmers to scribes, preists to professional soilders that
              serve there nation. This allows them to instead of focusing on one
              part of the civilization they can focus on much more
              civilizations. This also lead to the rise of its civilization.
              This also made it so that acient mesopotamia is one of the best or
              most seccussful acient civilization;The larger populations of a
              city demand that more food be produced. In general, a society
              needs food surpluses before civilization can develop. Having food
              surpluses allowed some people to do other types of work besides
              farming. With food surpluses, workers can specialize in jobs that
              require special skills. For instance, Sumerian workers built
              houses, sewed clothes, created pottery, and cooperated on building
              public projects such as ziggurats and irrigation canals. With so
              many needs and such a variety of workers, some people took on the
              job of organizing society. In early Sumer, priests did that job.
              They ran society and acted as judges. In time, religion and
              government became institutions. An institution is a group of
              people who share a specific purpose. For instance, schools are
              institutions that exist to educate a population. Religion is an
              institution that helps a population meet its spiritual needs. An
              Societies must keep track of many things. For example, rulers may
              want to measure the amount of surpluses stored in the city.
              Keeping records usually involves writing, but not always. In
              Mesopotamia, people started by using wooden counting sticks.
              Later, they invented the world's first system of writing,
              cuneiform. As people learn better ways to do things, societies
              advance. The people of early Sumer learned to use canals to
              irrigate crops. They also created new tools and used new materials
              to make those tools. For instance, the Sumerians began to make
              tools out of bronze. Bronze tools replaced tools made of copper, a
              softer metal.Civilization is closely linked to life in cities. At
              first, cities became important because farmers needed a place to
              store and trade their surplus grain. As cities grew, however, they
              began to offer other advantages such as temples to pray in and
              protection from outside threats. Because of the various services
              that a city provided, for those in search of a job, cities also
              offered many different types of work.
              <img src={require("./3074576.jpg")} />
              army is an institution that helps a society meet its security
              needs.
            </p>
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to="/login" />;
  }
};
const Cuniform = ({ isDark }) => {
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
              <h1>Cuniform</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./asd.jpg")} />
              Earliest times they invented the cuneiform or a ancient writing
              system used to record and pass down messages to both the future
              and other people. The writing was write on a clay tablet. It was
              invented by 3000BCE and was the representations were more
              simplified and the strokes of the stylus conveyed wood-concepts
              rather then word signs. this type was also used to do math and
              create math to used to type and print math. The great innovation
              of this leaded to more productive ciliation providing laws,
              records, and history. It was also used to create laws and
              communicate with others. This made both trading and mailing much
              more easier. Though after writing it started to help with writing
              math. It is used to do the basic of basic calculations.The third
              script of the Achaemenian trilinguals had in the meantime been
              identified with that of the texts found in very large numbers in
              Mesopotamia, which obviously contained the central language of
              cuneiform culture, namely Akkadian. Here also the proper names
              provided the first concrete clues for a decipherment, but the
              extreme variety of signs and the peculiar complications of the
              system raised difficulties which for a time seemed insurmountable.
              The serious external divergencies between older and newer types of
              Akkadian cuneiform, the distribution of ideographic and syllabic
              uses of the signs, the simple and complex values of the syllables,
              and especially the bewildering polyphony of many notations were
              only gradually surmised by scholars. Once the Semitic character of
              the language had been established, the philological science of
              Assyriology developed rapidly from the closing decades of the 19th
              century onward, especially because of scholars like Friedrich
              Delitzsch and, later, Benno Landsberger and Wolfram von Soden.
            </p>
            <div className="br"></div>
            <div className="title">
              <h6>Math</h6>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./1.jfif")} />
              Babylonian mathematics is a range of numeric and more advanced
              mathematical practices in the ancient Near East, written in
              cuneiform script. Study has historically focused on the Old
              Babylonian period in the early second millennium BC due to the
              wealth of data available. There has been debate over the earliest
              appearance of Babylonian mathematics, with historians suggesting a
              range of dates between the 5th and 3rd millennia BC. Babylonian
              mathematics was primarily written on clay tablets in cuneiform
              script in the Akkadian or Sumerian languages. "Babylonian
              mathematics" is perhaps an unhelpful term since the earliest
              suggested origins date to the use of accounting devices, such as
              bullae and tokens, in the 5th millennium BC. The Mesopotamians are
              credited with inventing mathematics. The people of Mesopotamia
              developed mathematics about 5,000 years ago. Early mathematics was
              essentially a form of counting, and was used to count things like
              sheep, crops and exchanged goods. Later it was used to solve more
              sophisticated problems related to irrigation and perhaps
              architecture. By the Late Babylonian period was used to solve
              complicated astrological and geometrical problems.The considerable
              mathematical knowledge of the Babylonians was uncovered by the
              Austrian mathematician Otto E. Neugebauer, who died in 1990.
              Scholars since then have turned to the task of understanding how
              the knowledge was used. The archaeological collections at
              Columbia, Yale and the University of Pennsylvania have offered
              insights into this issue. Kenneth Chang wrote in the New York
              Times: “Early Babylonian mathematicians who lived between 1800
              B.C. and 1600 B.C. had figured out, for example, how to calculate
              the area of a trapezoid, and even how to divide a trapezoid into
              two smaller trapezoids of equal area. For the most part,
              Babylonians used their mathematical skills for mundane
              calculations, like figuring out the size of a plot of land. But on
              some tablets from the later Babylonian period, there appear to be
              some trapezoid calculations related to astronomical
              observations.In the 1950s, an Austrian-American mathematician and
              science historian, Otto E. Neugebauer, described two of them.”
              [Source: Kenneth Chang , New York Times, January 28, 2016]
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="lo">
          <div className="farmRoomLight">
            <div className="title">
              <h1>Cuniform</h1>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./asd.jpg")} />
              <img src={require("./asd.jpg")} />
              Earliest times they invented the cuneiform or a ancient writing
              system used to record and pass down messages to both the future
              and other people. The writing was write on a clay tablet. It was
              invented by 3000BCE and was the representations were more
              simplified and the strokes of the stylus conveyed wood-concepts
              rather then word signs. this type was also used to do math and
              create math to used to type and print math. The great innovation
              of this leaded to more productive ciliation providing laws,
              records, and history. It was also used to create laws and
              communicate with others. This made both trading and mailing much
              more easier. Though after writing it started to help with writing
              math. It is used to do the basic of basic calculations.The third
              script of the Achaemenian trilinguals had in the meantime been
              identified with that of the texts found in very large numbers in
              Mesopotamia, which obviously contained the central language of
              cuneiform culture, namely Akkadian. Here also the proper names
              provided the first concrete clues for a decipherment, but the
              extreme variety of signs and the peculiar complications of the
              system raised difficulties which for a time seemed insurmountable.
              The serious external divergencies between older and newer types of
              Akkadian cuneiform, the distribution of ideographic and syllabic
              uses of the signs, the simple and complex values of the syllables,
              and especially the bewildering polyphony of many notations were
              only gradually surmised by scholars. Once the Semitic character of
              the language had been established, the philological science of
              Assyriology developed rapidly from the closing decades of the 19th
              century onward, especially because of scholars like Friedrich
              Delitzsch and, later, Benno Landsberger and Wolfram von Soden.
            </p>
            <div className="br"></div>
            <div className="title">
              <h6>Math</h6>
            </div>
            <div className="br"></div>
            <p className="content">
              <img src={require("./1.jfif")} />
              Babylonian mathematics is a range of numeric and more advanced
              mathematical practices in the ancient Near East, written in
              cuneiform script. Study has historically focused on the Old
              Babylonian period in the early second millennium BC due to the
              wealth of data available. There has been debate over the earliest
              appearance of Babylonian mathematics, with historians suggesting a
              range of dates between the 5th and 3rd millennia BC. Babylonian
              mathematics was primarily written on clay tablets in cuneiform
              script in the Akkadian or Sumerian languages. "Babylonian
              mathematics" is perhaps an unhelpful term since the earliest
              suggested origins date to the use of accounting devices, such as
              bullae and tokens, in the 5th millennium BC. The Mesopotamians are
              credited with inventing mathematics. The people of Mesopotamia
              developed mathematics about 5,000 years ago. Early mathematics was
              essentially a form of counting, and was used to count things like
              sheep, crops and exchanged goods. Later it was used to solve more
              sophisticated problems related to irrigation and perhaps
              architecture. By the Late Babylonian period was used to solve
              complicated astrological and geometrical problems.The considerable
              mathematical knowledge of the Babylonians was uncovered by the
              Austrian mathematician Otto E. Neugebauer, who died in 1990.
              Scholars since then have turned to the task of understanding how
              the knowledge was used. The archaeological collections at
              Columbia, Yale and the University of Pennsylvania have offered
              insights into this issue. Kenneth Chang wrote in the New York
              Times: “Early Babylonian mathematicians who lived between 1800
              B.C. and 1600 B.C. had figured out, for example, how to calculate
              the area of a trapezoid, and even how to divide a trapezoid into
              two smaller trapezoids of equal area. For the most part,
              Babylonians used their mathematical skills for mundane
              calculations, like figuring out the size of a plot of land. But on
              some tablets from the later Babylonian period, there appear to be
              some trapezoid calculations related to astronomical
              observations.In the 1950s, an Austrian-American mathematician and
              science historian, Otto E. Neugebauer, described two of them.”
              [Source: Kenneth Chang , New York Times, January 28, 2016]
            </p>
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to="/login" />;
  }
};
const Sources = ({ isDark }) => {
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
              <h1>Sources</h1>
            </div>
            <div className="br"></div>
            <div className="content">
              <ul>
                <li>
                  <h1>Wikipedia - Acient mesopotamia</h1>
                </li>
                <div className="br"></div>

                <li>
                  <h1>
                    HistoryOnThenet - Mespotamian Warfare/Military/socialclass
                  </h1>
                </li>
                <div className="br"></div>

                <li>
                  <h1>Youtube - Agriculture</h1>
                </li>
                <div className="br"></div>

                <li>
                  <h1>History - History Of Acient Mesopotamia</h1>
                </li>
                <div className="br"></div>

                <li>
                  <h1>britannica - History Of Acient Mesopotamia</h1>
                </li>
                <div className="br"></div>
                <li>
                  <h1>ReactJS - Framework for website</h1>
                </li>
                <div className="br"></div>

                <li>
                  <h1>ReactBootstrap - UI libary for React</h1>
                </li>
                <div className="br"></div>
                <li>
                  <h1>
                    NPM - Node Package manager, used to help install libary
                  </h1>
                </li>
                <div className="br"></div>
                <li>
                  <h1>GitHub - Used to track and save code</h1>
                </li>
                <div className="br"></div>
              </ul>
            </div>
            <center>
              <h1>Thanks & Credits</h1>
              <div className="br"></div>
              <h5 className="content">
                Over the past two months i've been nonstop coding and here is
                the final result, i tried my best and here i am presenting you
                one of my finest ReactJS
              </h5>
            </center>
          </div>
        </div>
      );
    } else {
      return (
        <div className="lo">
          <div className="farmRoomLight">
            <div className="title">
              <h1>Sources</h1>
            </div>
            <div className="br"></div>
            <div className="content">
              <ul>
                <li>
                  <h1>Wikipedia - Acient mesopotamia</h1>
                </li>
                <div className="br"></div>

                <li>
                  <h1>
                    HistoryOnThenet - Mespotamian Warfare/Military/socialclass
                  </h1>
                </li>
                <div className="br"></div>

                <li>
                  <h1>Youtube - Agriculture</h1>
                </li>
                <div className="br"></div>

                <li>
                  <h1>History - History Of Acient Mesopotamia</h1>
                </li>
                <div className="br"></div>

                <li>
                  <h1>britannica - History Of Acient Mesopotamia</h1>
                </li>
                <div className="br"></div>
                <li>
                  <h1>ReactJS - Framework for website</h1>
                </li>
                <div className="br"></div>

                <li>
                  <h1>ReactBootstrap - UI libary for React</h1>
                </li>
                <div className="br"></div>
                <li>
                  <h1>
                    NPM - Node Package manager, used to help install libary
                  </h1>
                </li>
                <div className="br"></div>
                <li>
                  <h1>GitHub - Used to track and save code</h1>
                </li>
                <div className="br"></div>
              </ul>
            </div>
            <center>
              <h1>Thanks & Credits</h1>
              <div className="br"></div>
              <h5 className="content">
                Over the past two months i've been nonstop coding and here is
                the final result, i tried my best and here i am presenting you
                one of my finest ReactJS
              </h5>
            </center>
          </div>
        </div>
      );
    }
  } else {
    return <Navigate to="/login" />;
  }
};
const Conflict = ({ isDark }) => {
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
              <h1>Conflict</h1>
            </div>
            <div className="br"></div>

            <p className="content">
              <img src={require("./download_orig.jpg")} />
              Hammurabi (1792 to 1750 B.C.), who created the first Babylonian
              empire, used all of Sargon’s weapons and tactics. He was known to
              create alliances, then later end them, conquering his former
              allies. Hammurabi’s reputation included damming up and diverting a
              city-state’s water sources. A clever emperor, his empire lasted
              only during his lifetime. The Later Neo-Babylonian Empire (626 to
              539 B.C.) repeated his successes. This made it super hard for them
              to do anything. This also made it super hard for them to work on
              everything since the constant invading didn't really allow the
              farmers to increase profit nor grow plants. So after they
              conquered the land, they drastically settled a lot of new rules.
              Sargon of Akkad created the first empire through conquest.
              Sargon’s conquest began with Sumer and stretched from the Persian
              Gulf to Syria and the Taurus Mountains in southern Anatolia or
              Turkey. During Sargon’s 50-year reign, he fought in 34 wars, using
              a core military of 5,400 men, the first true standing army. Once a
              city-state was conquered, it was required to provide a contingent
              of military men for Sargon’s main army. This became a standard
              element for empires from then on, the use of conquered forces in
              the victor’s army. As armies grew larger, the need for competent
              administration and logistics grew in importance. Sargon’s talents
              included administration and delegation: he gave this work to
              trusted men in both civilian and military matters. The invention
              of composite bow gave Sargon’s army a great advantage. Made of
              wood, horn and animal sinew laminated together, the composite bow
              had two to three times the power of a simple wooden bow. It could
              shoot twice the distance, and arrows shot from it could easily
              penetrate leather armor. In Sumer, there was no standing army,
              although there may have been some professional soldiers. When the
              king, high priest and council of elders decided the need for war,
              they called all free male citizens to arms. Each citizen had to
              bring his own weapons. Common weapons included bows, spears,
              slingshots, battle axes, maces and knives. Protective armor was
              rare, although many carried shields. Professional soldiers wore
              helmets of copper. When cities went to war, as did Umma and Lagash
              around 2525 B.C., the citizen armies came out from their cities
              and met on open land. At 300 feet distance, each army’s archers
              would shoot. The resulting barrage of arrows no doubt killed many,
              whose bodies were then trodden under foot when the armies charged
              each other with spears. Spears and rocks thrown by slingshots
              filled the air and many more died. Apparently, the army with the
              most men still standing won the day. This was the typical battle
              order of the times. A stele raised by the king of Lagash
              commemorates the victory of that city over its neighbor and enemy
              city, Umma. The Stele of Vultures shows ranks of soldiers in a
              phalanx formation, armed with spears and wearing copper helmets
              and short, armored cloaks for protection. The king of Lagash rode
              to the battle in the chariot of the times—a clumsy, heavy cart
              pulled by four onagers, or semi-wild asses. Sumerian military
              innovation includes the chariot, helmet, armored cloaks, bronze
              axes and the phalanx formation in battle.
              <img src={require("./Stele_of_Vultures_detail_01.jpg")} />
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="lo">
          <div className="farmRoomLight">
            <div className="title">
              <h1>Conflict</h1>
            </div>
            <div className="br"></div>

            <p className="content">
              <img src={require("./download_orig.jpg")} />
              Hammurabi (1792 to 1750 B.C.), who created the first Babylonian
              empire, used all of Sargon’s weapons and tactics. He was known to
              create alliances, then later end them, conquering his former
              allies. Hammurabi’s reputation included damming up and diverting a
              city-state’s water sources. A clever emperor, his empire lasted
              only during his lifetime. The Later Neo-Babylonian Empire (626 to
              539 B.C.) repeated his successes. This made it super hard for them
              to do anything. This also made it super hard for them to work on
              everything since the constant invading didn't really allow the
              farmers to increase profit nor grow plants. So after they
              conquered the land, they drastically settled a lot of new rules.
              Sargon of Akkad created the first empire through conquest.
              Sargon’s conquest began with Sumer and stretched from the Persian
              Gulf to Syria and the Taurus Mountains in southern Anatolia or
              Turkey. During Sargon’s 50-year reign, he fought in 34 wars, using
              a core military of 5,400 men, the first true standing army. Once a
              city-state was conquered, it was required to provide a contingent
              of military men for Sargon’s main army. This became a standard
              element for empires from then on, the use of conquered forces in
              the victor’s army. As armies grew larger, the need for competent
              administration and logistics grew in importance. Sargon’s talents
              included administration and delegation: he gave this work to
              trusted men in both civilian and military matters. The invention
              of composite bow gave Sargon’s army a great advantage. Made of
              wood, horn and animal sinew laminated together, the composite bow
              had two to three times the power of a simple wooden bow. It could
              shoot twice the distance, and arrows shot from it could easily
              penetrate leather armor. In Sumer, there was no standing army,
              although there may have been some professional soldiers. When the
              king, high priest and council of elders decided the need for war,
              they called all free male citizens to arms. Each citizen had to
              bring his own weapons. Common weapons included bows, spears,
              slingshots, battle axes, maces and knives. Protective armor was
              rare, although many carried shields. Professional soldiers wore
              helmets of copper. When cities went to war, as did Umma and Lagash
              around 2525 B.C., the citizen armies came out from their cities
              and met on open land. At 300 feet distance, each army’s archers
              would shoot. The resulting barrage of arrows no doubt killed many,
              whose bodies were then trodden under foot when the armies charged
              each other with spears. Spears and rocks thrown by slingshots
              filled the air and many more died. Apparently, the army with the
              most men still standing won the day. This was the typical battle
              order of the times. A stele raised by the king of Lagash
              commemorates the victory of that city over its neighbor and enemy
              city, Umma. The Stele of Vultures shows ranks of soldiers in a
              phalanx formation, armed with spears and wearing copper helmets
              and short, armored cloaks for protection. The king of Lagash rode
              to the battle in the chariot of the times—a clumsy, heavy cart
              pulled by four onagers, or semi-wild asses. Sumerian military
              innovation includes the chariot, helmet, armored cloaks, bronze
              axes and the phalanx formation in battle.
              <img src={require("./Stele_of_Vultures_detail_01.jpg")} />
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
            <Nav.Link href="/inventions">Inventions</Nav.Link>
            <Nav.Link href="/architecture">Architecture </Nav.Link>
            <Nav.Link href="/cuniform">Cuniform</Nav.Link>
            <Nav.Link href="/specilizedjobs">specialized jobs</Nav.Link>
            <Nav.Link href="/sources">Sources/Thanks</Nav.Link>
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
        <Route path="/cuniform" element={<Cuniform isDark={IsDark} />} />

        <Route path="/farming" element={<Farming isLightMode={IsDark} />} />
        <Route path="/architecture" element={<Arch isLightMode={IsDark} />} />
        <Route
          path="/specilizedjobs"
          element={<SpecilizedJobs isDark={IsDark} />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/sources" element={<Sources isDark={IsDark} />} />

        <Route path="/conflict" element={<Conflict isDark={IsDark} />} />

        <Route path="/history" element={<History isDark={IsDark} />} />
        <Route path="/military" element={<Military isDark={IsDark} />} />
        <Route path="*" element={<Error />} />
        <Route path="/inventions" element={<Inventions isDark={IsDark} />} />
        <Route path="/socialclass" element={<SocialClass isDark={IsDark} />} />
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
