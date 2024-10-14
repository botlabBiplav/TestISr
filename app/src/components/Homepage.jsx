"use client";
import React, { useEffect, useState } from "react";
import Services from "./Home/Services";
import Social from "./Home/Social";
import DroneType from "./Home/DroneType";
import Events from "./Home/Events";
import Client from "./Home/Client";
import Creative from "./Home/Creative";
import Form from "./Form/From";
import HeroCard from "./Home/Herocard";
import Testimonials from "./Home/Testimonials";
import StoryPage from "./Home/StoryPage";
import Animation from "./Home/Animation";
// import LandingPage from "./Landingpage/LandingPage";
import dynamic from "next/dynamic";
import DatePicked from "../components/Form/DatePicked";
import axios from "axios";
import header from "./Home/HeaderBar";
import HeaderBar from "./Home/HeaderBar";
import ContactUs from "../../../pages/ContactUs";
import Herocard from "./Home/Herocard";
// import Portfolio from "./Home/Portfolio";
import Showreel from "./Home/Showreel";
import BiggestDroneShow from "./Home/BiggestDroneShow";
import GetUser from "../../../lib/GetUser";
// import CareesPage from "./Home/CareesPage"
// import CareesPage from "./CareersPage/CareersPage";

// import ServerGet from "./Home/ServerGet";


const LandingPage = dynamic(() => import("./Landingpage/LandingPage"), {
  ssr: false,
});
const Background = dynamic(() => import("./Background/Background"), {
  ssr: false,
});

const Homepage = () => {
  const [landingPageLoaded, setLandingPageLoaded] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // Simulate loading time for demonstration purposes
    const timer = setTimeout(() => {
      setLandingPageLoaded(true);
    }, 10); // Adjust the delay time as needed

    // Clean up timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/products`);
        setArticles(res.data.data);
      } catch (error) {
        console.error("there is some error with the api", error);
      }
    };
    fetchdata();
  }, [API_URL]);

  useEffect(() => {
    console.log(articles, "this is article");
  }, [articles]);

  return (
    <>
      <div className="z-10">
        <Background />
        <div>
          {/* <ServerGet /> */}

          <div>
        {/* <LandingPage /> */}
        </div>
          {/* <Herocard /> */}
          <StoryPage />
          {/* <Portfolio /> */}

          {/* {landingPageLoaded ? ( */}
          <>
            {/* <Services /> */}
            <Events />
            <Showreel />
            <div className="bg-gradient-to-t from-black via-transparent">
              <BiggestDroneShow />
            </div>
            <Animation />
            <div className="bg-black">
              <Testimonials />
              <Client />
              <Form />
              <GetUser />
              
            </div>
          </>
          {/* ) : (
          ""
        )} */}
        </div>
      </div>
      {/* <Creative /> */}
    </>
  );
};

export default Homepage;
