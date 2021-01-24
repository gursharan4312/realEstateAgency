import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles from "./globalStyles";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import CardSection from "./components/CardSection";
import { SliderData } from "./data/SliderData";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import { CardData } from "./data/CardData";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <GlobalStyles />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <CardSection {...CardData} />
    </>
  );
}

export default App;
