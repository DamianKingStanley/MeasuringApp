import React, { useState } from "react";
import "./Home.css";
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import HeroSection from "../../component/HeroSection/HeroSection";
import DistanceCalculator from "../../component/DistanceCalculator/DistanceCalculator";
import Footer from "../../component/Footer/Footer";
import BottomNavbar from "../../component/BottomNavbar/BottomNavbar";
import HeartRateCalculator from "../../component/HeartRateCalculator/HeartRateCalculator";
import Speed from "../../component/Speed/Speed";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("distance");

  return (
    <div className="HomeSection">
      <NavigationBar />
      <HeroSection />
      <DistanceCalculator />
      {selectedTab === "speed" && <Speed />}
      {selectedTab === "heart" && <HeartRateCalculator />}
      <BottomNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Footer />
    </div>
  );
};

export default Home;
