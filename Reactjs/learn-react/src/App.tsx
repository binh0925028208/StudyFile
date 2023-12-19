import "./App.css";
import Banner from "./components/banner/banner";
import BannerUnderInfo from "./components/bannerUnderInfo/bannerUnderInfo";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import InfoUnderBanner from "./components/infoUnderBanner/infoUnderBanner";
import InfoUnderMain from "./components/infoUnderMain/infoUnderMain";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <InfoUnderBanner />
      <BannerUnderInfo />
      <Main />
      <InfoUnderMain />
      <Footer />
    </div>
  );
}

export default App;
