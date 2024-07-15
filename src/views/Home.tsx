import React from "react";
import HeroSection from "../components/Home/HeroSection";
type HomeProps = {
  theme: string;
};
const Home: React.FC<HomeProps> = ({ theme }) => {
  return (
    <div>
      <HeroSection theme={theme} />
    </div>
  );
};

export default Home;
