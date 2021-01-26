import Hero from "../components/Hero";
import Layout from "../components/Layout";
import InfoSection from "../components/InfoSection";
import { SliderData } from "../data/SliderData";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import { CardData } from "../data/CardData";
import CardSection from "../components/CardSection";

function index() {
  return (
    <Layout>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <CardSection {...CardData} />
    </Layout>
  );
}

export default index;
