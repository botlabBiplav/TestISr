import { useEffect, useRef } from "react";
import baseplate from "../../../../Images/Image/Baseplate.webm";
import projectionmapping from "../../../../Images/Image/projection mapping.webm";
import fireworks from "../../../../Images/Image/fireworks.webm";
import lasers from "../../../../Images/Image/Lasers.webm";
import useGetRequest from "../../../api/UseGetRequest";
import endpointData from "../../../api/endpointData";

import "./Animation.css";
const Animation = () => {
  const checkboxFireworksRef = useRef(null);
  const videoContainerFireworksRef = useRef(null);
  const checkboxProjectionRef = useRef(null);
  const videoContainerProjectionRef = useRef(null);
  const checkboxLaserRef = useRef(null);
  const videoContainerLaserRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleCheckboxChange = (checkbox, videoContainer) => {
      if (checkbox.checked) {
        videoContainer.classList.remove("cardanimation");
      } else {
        videoContainer.classList.add("cardanimation");
      }
    };

    const checkboxFireworks = checkboxFireworksRef.current;
    const videoContainerFireworks = videoContainerFireworksRef.current;
    const checkboxProjection = checkboxProjectionRef.current;
    const videoContainerProjection = videoContainerProjectionRef.current;
    const checkboxLaser = checkboxLaserRef.current;
    const videoContainerLaser = videoContainerLaserRef.current;

    const handleFireworksChange = () =>
      handleCheckboxChange(checkboxFireworks, videoContainerFireworks);
    const handleProjectionChange = () =>
      handleCheckboxChange(checkboxProjection, videoContainerProjection);
    const handleLaserChange = () =>
      handleCheckboxChange(checkboxLaser, videoContainerLaser);

    checkboxFireworks.addEventListener("change", handleFireworksChange);
    checkboxProjection.addEventListener("change", handleProjectionChange);
    checkboxLaser.addEventListener("change", handleLaserChange);

    return () => {
      checkboxFireworks.removeEventListener("change", handleFireworksChange);
      checkboxProjection.removeEventListener("change", handleProjectionChange);
      checkboxLaser.removeEventListener("change", handleLaserChange);
    };
  }, []);

  const { data, loading, error } = useGetRequest(endpointData.experienceIntegration);


  // if (loading) return <p>Loading...</p>; // Show loading indicator while fetching data

  // if (error) return <p>Error: {error.message}</p>; // Show error message if request fails

  // console.log(data, "showbiggestdrone");
  return (
    <div className="h-full bg-black text-white pl-80">
      <div className="relative">
        {
          
        }
        <div className="">
          <div className="w-auto ml-80 pt-20 top-[0%]">
            <video
              id="video"
              ref={videoRef}
              src={baseplate}
              className=""
              autoPlay
              muted
              loop
              disablePictureInPicture
            />
          </div>
          <div
            id="projectionvid"
            ref={videoContainerProjectionRef}
            className="cardanimation absolute w-auto ml-80 pt-20 top-[0%]"
          >
            <video
              id="video"
              ref={videoRef}
              src={projectionmapping}
              autoPlay
              muted
              loop
              disablePictureInPicture
            />
          </div>
          <div
            id="fireworksvid"
            ref={videoContainerFireworksRef}
            className="cardanimation absolute w-auto ml-80 pt-20 top-[0%]"
          >
            <video
              id="video"
              ref={videoRef}
              src={fireworks}
              autoPlay
              muted
              loop
              disablePictureInPicture
            />
          </div>
          <div
            id="laservid"
            ref={videoContainerLaserRef}
            className="cardanimation absolute w-auto ml-80 pt-20 top-0 "
          >
            <video
              id="video"
              ref={videoRef}
              src={lasers}
              autoPlay
              muted
              loop
              disablePictureInPicture
            />
          </div>

          <div className="absolute xl:top-8 md:top-0">
            <div className="w-[500px] text-center flex justify-center">
              <div>
                <div className="flex justify-start">
                  <h1 className="text-3xl w-auto mt-20 text-left font-light font-lexend">
                    <span className="font-golden-hopes text-6xl align-top">
                      Experience Integration
                    </span>
                  </h1>
                </div>

                <p className="w-96 text-xl text-left font-lato xl:my-20 lg:my-10">
                  Our Team of creative and seasoned artists is capable of
                  integrating drone show design with several other experiential
                  media to create moments that will forever be etched in the
                  memories of the audience
                </p>

                <div className="flex justify-start text-black">
                  <label className="">
                    <div className="xl:w-28 w-24 min-h-24 xl:min-h-28 rounded-md border-2 border-[#b5bfd9] bg-white shadow-lg shadow-black/10 transition duration-150 ease-in cursor-pointer relative mr-2 my-2">
                      <input
                        type="checkbox"
                        id="laser"
                        className="rounded-md border-gray-300 m-2"
                        ref={checkboxLaserRef}
                      />
                      <p className="mt-10 text-center"> Laser</p>
                    </div>
                  </label>
                  <label className="">
                    <div className="xl:w-28 w-24 min-h-24 xl:min-h-28 rounded-md border-2 border-[#b5bfd9] bg-white shadow-lg shadow-black/10 transition duration-150 ease-in cursor-pointer relative m-2">
                      <input
                        type="checkbox"
                        id="fireworks"
                        ref={checkboxFireworksRef}
                        className="m-2"
                      />

                      <p className="mt-10 text-center"> Fireworks</p>
                    </div>
                  </label>

                  <label>
                    <div className="xl:w-28 w-24 min-h-24 xl:min-h-28 rounded-md border-2 border-[#b5bfd9] bg-white shadow-lg shadow-black/10 transition duration-150 ease-in cursor-pointer relative m-2">
                      <input
                        type="checkbox"
                        id="projection"
                        ref={checkboxProjectionRef}
                        className="m-2"
                      />

                      <p className="mt-10 text-center"> 3D Projection</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
