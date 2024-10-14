import React from "react";
import endpointData from "../../../api/endpointData";
import useGetRequest from "../../../api/UseGetRequest";
import {renderTextWithColor} from "../../../../lib/textHelpers"


export async function getStaticProps(){
  console.log('this is workingdata ccr');
  const res = await fetch('https://api.vercel.app/blog'); // Replace with your API
}
















const Showreel = () => {
  const { data, loading, error } = useGetRequest(endpointData.showreel);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (loading) return <p>Loading...</p>; // Show loading indicator while fetching data

  if (error) return <p>Error: {error.message}</p>; // Show error message if request fails

  console.log(data, "showrealdata");

  return (
    <>
      {/* <div className="relative h-[260vh]"> */}
      {data.map((item, index) => (
        <div key={index} className="flex-column lg:mx-80 mx-40 h-auto py-40">
          <div className="flex-row text-center text-white">
            <p className="text-6xl font-lexend pb-5">
              {/* The{" "}
              <span className="font-golden-hopes text-8xl align-middle text-[#8409FF]">
                {" "}
                Perfect Solution{" "}
              </span>{" "}
              for your next Event */}
              {renderTextWithColor(item.attributes.title)}
            </p>
            <p className="text-2xl font-lato font-light pb-20">
              {item.attributes.subtitle}
            </p>
          </div>
          <div className="flex-row align-center justify-center">
            <iframe
              className="flex w-full h-full aspect-video"
              src={item.attributes.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </>
  );
};

export default Showreel;
