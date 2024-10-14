import React, { useEffect } from "react";
import endpointData from "../../../api/endpointData";
import useGetRequest from "../../../api/UseGetRequest";
import {renderTextWithColor} from "../../../../lib/textHelpers";
const BiggestDroneShow = () => {

 
  const { data, loading, error } = useGetRequest(endpointData.biggestdroneshows);

  if (loading) return <p>Loading...</p>; // Show loading indicator while fetching data

  if (error) return <p>Error: {error.message}</p>; // Show error message if request fails

  

  return (
    <>
      {/* <div className="relative h-[260vh]"> */}
      {data.map((item, index) => (
        <div key={index} className=" lg:mx-80 mx-40 h-auto text-white">
          <div className="flex align-center justify-center">
            <div className="flex-row text-center">
              <p className="text-6xl font-lexend pb-5">
                {/* The World&apos;s{" "}
                <span className="font-golden-hopes text-8xl align-middle text-[#8409FF]">
                  {" "}
                  Biggest{" "}
                </span>{" "}
                Drone Show */}
                {      console.log(renderTextWithColor(item.attributes.title),'textdata')
                }
                {renderTextWithColor(item.attributes.title)}
              </p>
              <p className="text-2xl font-lato font-light pb-20">
                {/* Watch Nakshatra - a 4 part series on how we created the
                World&apos;s Biggest Drone show earlier this year
                <br /> during Anant Ambani and Radhika Merchant&apos;s
                Pre-wedding celebrations */}
                {item.attributes.subtitle}

              </p>
            </div>
          </div>
          <div className="flex align-between justify-center gap-20 py-10">
            <div className="w-1/2 text-center">
              <iframe
                className="flex aspect-video w-full"
                src={item.attributes.videoUrl1}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-1/2 text-center">
              <iframe
                className="flex aspect-video w-full"
                src={item.attributes.videoUrl2}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex align-between justify-center gap-20 py-10">
            <div className="w-1/2 text-center">
              <iframe
                className="flex aspect-video w-full"
                src={item.attributes.videoUrl3}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-1/2 text-center">
              <iframe
                className="flex aspect-video w-full"
                src={item.attributes.videoUrl4}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BiggestDroneShow;
