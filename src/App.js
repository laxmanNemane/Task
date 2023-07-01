// import moment from "moment/moment";

import Header from "./Layout/Header";
import Brands from "./Pages/Brands";
import ConatnentThirdSection from "./Pages/ConatnentThirdSection";
import Content from "./Pages/Content";
import ContentSecondSection from "./Pages/ContentSecondSection";
import EveryOneSection from "./Pages/EveryOneSection";
import FullSurpriseSection from "./Pages/FullSurpriseSection";
import HeroSection from "./Pages/HeroSection";
import ImagesSection from "./Pages/ImagesSection";
import WorkTogether from "./Pages/WorkTogether";

import "./Assets/CSS/App.css";
import Footer from "./Layout/Footer";
import MainFooter from "./Layout/MainFooter";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <HeroSection />
      <EveryOneSection />
      <Brands />
      <Content />
      <ContentSecondSection />
      <ConatnentThirdSection />
      <ImagesSection />
      <WorkTogether />
      <FullSurpriseSection />
      <Footer />
      <MainFooter />
      {/* <h1 className="My_name">hello lakhan</h1>
      <h2 className="My_name">hello lakhan</h2>
      <h3 className="My_name">hello lakhan</h3> */}
    </div>
  );
}

export default App;
