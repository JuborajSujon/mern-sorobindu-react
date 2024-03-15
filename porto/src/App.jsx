import Header from "./assets/components/Header.jsx";
import HeroSection from "./assets/components/HeroSection.jsx";
import StickyMenu from "./assets/components/StickyMenu";
import CallToAction from "./assets/components/CallToAction";
import PortoWrap from "./assets/components/PortoWrap.jsx";
import OurServices from "./assets/components/OurServices";
function App() {
  return (
    <>
      <StickyMenu />
      <Header />
      <HeroSection />
      <CallToAction />
      <PortoWrap />
      <OurServices />
    </>
  );
}

export default App;
