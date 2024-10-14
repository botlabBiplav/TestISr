// pages/LandingPage.js
"use client";
import { useEffect, useRef, useState } from "react";
import { TweenMax, Power3 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import dronevideo from "../../../../Images/Image/drone.webm";
import "./landingpage.css";
import Herocard from "../Home/Herocard";
import StoryPage from "../Home/StoryPage";
import useGetRequest from "../../../api/UseGetRequest";
import endpointData from "../../../api/endpointData";
// Initialize ScrollMagicPluginGsap
// ScrollMagicPluginGsap(ScrollMagic, TweenMax);

const LandingPage = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const introRef = useRef(null);
  const textRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Initialize ScrollMagicPluginGsap only on client-side
    ScrollMagicPluginGsap(ScrollMagic, TweenMax);
    // Init ScrollMagic Controller
    const intro = introRef.current;
    const text = textRef.current;
    const controller = new ScrollMagic.Controller();

    const textAnim = TweenMax.fromTo(text, 1, { opacity: 0 }, { opacity: 1 });
    const updateOpacity = (event) => {
      const newOpacity = event.progress.toFixed(2); // Limiting to 2 decimal places
      // Implement your logic to set opacity state or perform actions based on newOpacity
    };

    new ScrollMagic.Scene({
      duration: 750,
      triggerElement: intro,
      offset: 300,
      triggerHook: 0,
    })
      .addIndicators()
      .setTween(textAnim)
      .on("update", (e) => {
        const newOpacity = e.target.progress();
        setOpacity(newOpacity);
        updateOpacity;
      })
      .addTo(controller);

    // Build Scene for text animation
    // new ScrollMagic.Scene({
    //     triggerElement: '.intro',
    //     triggerHook: 0.5, // Trigger at middle of viewport
    //     duration: '100%', // Duration of animation
    // }).setTween(TweenMax.from('.intro h1', 1, { opacity: 0, y: 50, ease: Power3.easeOut })).addTo(controller).on('leave', function (event) {
    //     // Reset the styles when leaving the scene
    //     if (event.scrollDirection === 'FORWARD') {
    //         TweenMax.to('.intro h1', 2, { opacity: 1, y: 0 }); // Reset h1 styles
    //     }
    //     console.log(event, 'eventdatafound');
    // });

    // Build Scene for video animation
    let accelAmount = 0.5;
    let scrollpos = 0;
    let delay = 0;

    const updateScrollPos = (e) => {
      const scrollPos = e.scrollPos; // Current scroll position
      setScrollPosition(scrollPos); // Update scroll position state
      updateVideoTime(scrollPos); // Update video time based on scroll position
      scrollpos = e.scrollPos / 40;
    };

    const updateVideoTime = () => {
      delay += (scrollpos - delay) * accelAmount;
      const video = document.getElementById("videodata");
      if (document.getElementById("videodata")) {
        if (delay !== 0) {
          video.currentTime = delay;
        }
      }
    };
    const scene = new ScrollMagic.Scene({
      duration:750, // Duration of the scroll
      triggerElement: ".intro",
      triggerHook: 0, // Top of the viewport
    })
      .setPin(".intro")
      .on("update", updateScrollPos)
      .addTo(controller);

    setInterval(updateVideoTime, 40);

    // Clean up on unmount
    return () => {
      controller.destroy();
    };
  }, []);

  const [loaddata, setLoaddata] = useState(false);

  useEffect(() => {
    // Simulate loading completion after a delay
    const timer = setTimeout(() => {
      setLoaddata(true);
      clearTimeout(timer);
    }, 1000); // Adjust the delay time as needed

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);

  const { data, loading, error } = useGetRequest(endpointData.scrollAnimation);

  // if (loading) return <p>Loading...</p>; // Show loading indicator while fetching data

  // if (error) return <p>Error: {error.message}</p>; // Show error message if request fails
  console.log(data, "datavalueFound");

  return (
    <div className="z-0">
      <div
      className={`cursor-default ${opacity > 1 ? "opacity-full" : "pb-0"}`}
    >
      <div className="intro" ref={introRef}>
        {/* <h1 className='!text-white  font-bold text-3xl' ref={textRef}>BOTLAB DYNAMICS</h1> */}
        
        <div ref={textRef} className="intro-video">
          <video src={videodata} autoPlay muted loop disablePictureInPicture className='fixed top-0 left-0 min-w-full min-h-full object-cover'/>
          {loaddata && <Herocard />}
        </div>
        {/* strapi integration */}
        {/* {data?.map((item) => (
          <>
            <span className={scrollPosition > 0.2 ? "hidden" : "block"}>
              {item.attributes.title}
            </span>
            <video
              id="videodata"
              src={`${
                API_URL + item.attributes.animatonvideo.data[0].attributes.url
              }`}
            ></video>
          </>
        ))} */}

{/* <span className={scrollPosition > 0.2 ? "hidden" : "block"}>
          Scroll for the magic to happen
        </span> */}
        

        <video id="videodata" src={dronevideo} className="z-20"></video>

      <StoryPage />

        {/* <video id='videodata' src={dronevideo} autoPlay muted loop playsInline disablePictureInPicture className='absolute top-0 left-0 min-w-full min-h-full object-cover z-0' /> */}
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
