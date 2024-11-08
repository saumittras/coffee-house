import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading*/}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee to browse through specific that fit in your taste"
        }
      />
      {/* Categories tab section */}
      {/* Dynamic Nestaed components */}
    </div>
  );
};

export default Home;
