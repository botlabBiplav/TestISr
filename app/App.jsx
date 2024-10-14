"use client";
import Image from "next/image";
import Homepage from "./src/components/Homepage";
import React, { useEffect, useState, useLayoutEffect } from "react";
import loadinganimation from "../Images/Image/animatedDrone.webm";
import loadingdata from "../Images/Image/logoData.gif";
import gsap from "gsap";

const App = () => {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    // Function to scroll to top on initial load
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Ensure to scroll to top before initial load
    scrollToTop();
  }, []);

  useEffect(() => {
    // Simulate loading completion after a delay
    const timer = setTimeout(() => {
      setLoading(false);
      clearTimeout(timer);
    }, 1000); // Adjust the delay time as needed  do it for 5 sec

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // GSAP animation for content transition
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "power3.inOut" },
    });

    if (!loading) {
      tl.fromTo(".content", { opacity: 0, y: -20 }, { opacity: 1, y: 0 });
    } else {
      tl.to(".content", { opacity: 0, y: -20 });
    }
  }, [loading]);
  return (
    <div>
      {/* {loading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>Loading...</p>
        </div>
    ) : (
        <Homepage />
    )} */}
      {/* opacity-0 transition-opacity duration-500 ease-in-out */}

      {/* {loading ? (
        <div className="flex justify-center items-center align-middle  h-screen transition-opacity duration-700 ease-in-out  ">
          <Image
            src={loadingdata}
            alt="Description of your image"
            width={250}
            height={250}
            className=""
          />
        </div>
      ) : ( */}
        <div className="transition-opacity duration-700 ease-in-out">
          <Homepage />
        </div>
      {/* )} */}
    </div>
  );
};

export default App;
