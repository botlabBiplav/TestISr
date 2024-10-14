import React from "react";
import parallaxImg from "../../../../public/Dots.png";
import Image from "next/image";
import Video from "next-video";
import SimpleParallax from "simple-parallax-js";
import useGetRequest from "../../../api/UseGetRequest";
import endpointData from "../../../api/endpointData";

const StoryPage = ({getData}) => {

  // const { data, loading, error } = useGetRequest(endpointData.storyPage);
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // if (loading) return <p>Loading...</p>; // Show loading indicator while fetching data

  // if (error) return <p>Error: {error.message}</p>; // Show error message if request fails

  // console.log(data, "storypage ");
  return (
    <>
      {/* <div className="relative h-[260vh]"> */}
      <div>
        {/* <SimpleParallax scale={0.5} delay={0} overflow="true">
      
        <video src={parallaxVid}  className="hue-rotate-[0deg] blur-[1px]" autoPlay muted loop />
        <Image src={parallaxImg} alt="image" className="pt-80"/>

      </SimpleParallax> */}

   

        {/* ------------------> */}
        <div className="text-white lg:text-6xl bg-gradient-to-b from-black">
          <div className="pb-10 sm:pt-40">
            {getData?.map((item, index) => (
              <div key={index}>
                {item.id == 1 && (
                  <div className="flex justify-start lg:mx-80 mx-10 select-none">
                    <div className="mt-5 sm:w-1/2">
                      <p className="text-white lg:text-4xl text-2xl tracking-widest font-lexend">
                        {item.attributes.title}
                        <span className="font-golden-hopes lg:text-9xl text-6xl text-[#8409FF]">
                          {" "}
                          {/* Innovation{" "} */}
                          {item.attributes.subtitle}
                        </span>
                      </p>
                      <p className="text-white lg:text-4xl text-2xl mt-8 font-lato font-light">
                        {item.attributes.description}
                      </p>
                    </div>
                    <div className="sm:w-1/2 h-auto"></div>
                  </div>
                )}

                {item.id == 2 && (
                  <div className="flex justify-end lg:mt-36 lg:mx-80 mx-10 select-none">
                    <div className="sm:w-1/2 h-auto"></div>
                    <div className="sm:w-1/2 mt-5">
                      <p className="text-white lg:text-4xl text-2xl tracking-widest w-auto font-lexend">
                        {item.attributes.title}
                        <span className="font-golden-hopes lg:text-9xl text-6xl text-[#8409FF]">
                          {" "}
                          {item.attributes.subtitle}
                        </span>
                      </p>
                      <p className="text-white lg:text-4xl text-2xl mt-2 font-lato font-light">
                        {item.attributes.description}
                      </p>
                    </div>
                  </div>
                )}
                {item.id == 3 && (
                  <div className="flex justify-start lg:mt-36 lg:mx-80 mx-10 select-none">
                    <div className="mt-5 lg:w-1/2">
                      <p className="text-white lg:text-4xl text-2xl tracking-widest w-auto font-lexend">
                        {item.attributes.title}

                        <span className="font-golden-hopes lg:text-9xl text-6xl text-[#8409FF]">
                          {" "} {item.attributes.subtitle}
                        </span>
                      </p>
                      <p className="text-white mt-2 lg:text-4xl text-2xl font-lato font-light">
                        {item.attributes.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
    // <div className="parallax">
    //   <div className="pb-10">
    //     <div className=" relative flex justify-start sm:ml-60 ml-20 select-none">
    //       <div className="mt-5">
    //         <p className="text-white text-4xl tracking-widest w-96 font-lexend">
    //           A NEW AGE OF STORYTELLING
    //         </p>
    //         <p className="text-white text-xl mt-2 w-96 max-w-fit font-lato-light">
    //           Emabark on a journey into the future of art, entertainment and
    //           advertising with our flexible and scable drone shows, meticulously
    //           customized to elevate your unique theme
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex justify-center sm:mt-40 mt-20 select-none">
    //       <div className="w-[400px]">
    //         <p className="text-white text-4xl tracking-widest w-96 font-lexend">
    //           EXPERIENCES THAT INSPIRE
    //         </p>
    //         <p className="text-white text-xl mt-2 w-96 max-w-fit font-lato-light">
    //           Emabark on a journey into the future of art, entertainment and
    //           advertising with our flexible and scable drone shows, meticulously
    //           customized to elevate your unique theme
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex justify-end sm:mr-52 mr-20 sm:mt-40 mt-20 select-none  ">
    //       <div className="w-[400px]">
    //         <p className="text-white text-4xl tracking-widest w-96 font-lexend">
    //           A NEW AGE OF STORYTELLING
    //         </p>
    //         <p className="text-white  mt-2 text-xl w-96 max-w-fit font-lato-light">
    //           Emabark on a journey into the future of art, entertainment and
    //           advertising with our flexible and scable drone shows, meticulously
    //           customized to elevate your unique theme
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default StoryPage;
