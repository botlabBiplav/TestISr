import React, { useState, useEffect } from "react";
import videodata from "../../../../Images/Image/herosectionbackground.webm";
import endpointData from "../../../api/endpointData";
import useGetRequest from "../../../api/UseGetRequest";
import IsrFetch from "../../../api/IsrFetch";

const Herocard = ({ getData }) => {
  console.log(getData, "dataFetch");
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const words = ["Storytelling", "Entertainment", "Advertising"];

    const typingSpeed = 70; // Speed of typing in milliseconds
    const pauseDuration = 1000; // Pause duration in milliseconds after typing

    const typeEffect = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        // Handle the deleting phase
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setIsPaused(false); // Start pause after deleting completes
        }
      }
      if ((isDeleting) => false) {
        // Handle the typing phase
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setIsPaused(true); // Ensure pause state is reset
          setCharIndex(0); // Reset character index for the next word
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
        }
      }
    };

    const intervalId = setInterval(
      () => {
        if (isPaused) {
          // Handle the pause duration after typing
          setIsPaused(false); // Reset pause status to start deleting
          setIsDeleting(true);
        } else {
          typeEffect();
        }
      },
      isDeleting ? typingSpeed : isPaused ? pauseDuration : typingSpeed
    );

    return () => clearInterval(intervalId);
  }, [charIndex, isDeleting, wordIndex, isPaused]);

  // const { data, loading, error } = useGetRequest(endpointData.heroSection);
  const { data, error } = IsrFetch(endpointData.heroSection);

  // [0].attributes.title

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // if (loading) return <p>Loading...</p>; // Show loading indicator while fetching data

  // if (error) return <p>Error: {error.message}</p>; // Show error message if request fails

  // console.log(data, "this data is working ");
  return (
    <>
      {/* <div class="aspect-w-16 aspect-h-9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8U3TVWQ0oog?si=5guRCfWXI9F-2rOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> */}
      {/* strapi integration */}
      {/* {data?.map((item) => (
        <>
          <div className="relative h-screen w-full overflow-hidden bg-black ">
            <video
              src={`${
                API_URL + item.attributes.backgroundVideo.data[0].attributes.url
              }`}
              autoPlay
              muted
              loop
              disablePictureInPicture
              className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
            />

            <div className="relative z-10 flex flex-col justify-center items-center h-full">
              <div className="text-center text-white">
                <h1 className="text-white text-8xl font-bold text-center w-[1100px]">
                  {item.attributes.title}
                </h1>
                <div className="flex justify-center">
                  <p className="mt-5 text-4xl w-[700px]">
                    {item.attributes.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))} */}

      {getData?.map((item, index) => (
        <div key={index} className="relative h-screen w-full overflow-hidden bg-transparent">
          <video
            src={`${
              API_URL + item.attributes.backgroundVideo.data[0].attributes.url
            }`}
            autoPlay
            muted
            loop
            disablePictureInPicture
            className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
          />

          <div className="relative z-10 flex flex-col sm:justify-end justify-center md:pb-8 sm:max-lg:pl-20 lg:pl-80 px-10 sm:items-start items-center h-full">
            <div className="sm:text-left text-center text-white">
              <h1 className="text-white sm:text-7xl pb-4 text-4xl font-lexend sm:w-auto">
                {item.attributes.title}
                <br />{" "}
                <p
                  id="typewriter"
                  className="font-golden-hopes sm:text-[13rem] text-7xl sm:text-[#8409FF]"
                >
                  {" "}
                  {text}&nbsp;
                </p>
              </h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Herocard;
