import AboutHome from "../../components/AboutHome";
import BigTitle from "../../components/BigTitle";
import Cards from "../../components/Cards";
import Design from "../../components/Design";
import LocationsHome from "../../components/LocationsHome";
import ServicesHome from "../../components/ServicesHome";
import Slider from "../../components/Slider";
import WhyFavo from "../../components/WhyFavo";
import WeblogSection from "../../components/WeblogSection";


export default function Home() {
  return (
    <>
      
      <Slider />
      <Cards />
      <BigTitle bigTitle='ABOUT' />
      <AboutHome />
      <WhyFavo />
      <BigTitle bigTitle='DESIGN' />
      <Design />
      <BigTitle bigTitle='SERVICES' />
      <ServicesHome />
      <BigTitle bigTitle='LOCATIONS' />
      <LocationsHome />
      <BigTitle bigTitle='WEBLOGS' />
      <WeblogSection />
      
    </>
  );
}
