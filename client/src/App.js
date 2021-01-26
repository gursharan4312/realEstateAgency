import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles, { themes } from "./globalStyles";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import CardSection from "./components/CardSection";
import { SliderData } from "./data/SliderData";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import { CardData } from "./data/CardData";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Navbar toggle={toggle} setTheme={setTheme} theme={theme} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <CardSection {...CardData} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
