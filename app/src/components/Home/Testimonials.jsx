import React from "react";
import Testimonialdata from "../../../Data/Testimonialdata";
import Image from "next/image";
import { Card, CardContent } from "../../../../components/ui/card";
import Autoplay from "embla-carousel-autoplay";
// import clientImg from "../../../Images/Image/client.svg";
import UseGetRequest from "../../../api/UseGetRequest";
import endpointData from "../../../api/endpointData";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

const Testimonials = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const plugin = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false })
  );

  const { data, loading, error } = UseGetRequest(endpointData.testimonials);

  if (loading) return <p>Loading...</p>; // Show loading indicator while fetching data

  if (error) return <p>Error: {error.message}</p>; // Show error message if request fails
  console.log(data, "dataGGT");
  return (
    <>
      <div className="pt-40">
        <div>
          {/* <h1 className="text-center text-white lg:text-6xl text-4xl font-lexend">
            WHAT PEOPLE SAY ABOUT US [0].attributes.profileImg.data[0].attributes.url
          </h1> */}
        </div>

        <div className="flex justify-center items-center mt-20 mx-40">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent type={"ClientUI"}>

              {data.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  {console.log(item.attributes.profileImg.data,'this is a itemdata')}
                  <div className="p-1">
                    <Card className="border-none bg-gray-800/45 backdrop-blur-sm">
                      <CardContent className="flex items-center justify-center p-6">
                        <div className="card text-white ">
                          <div className='xl:h-[500px] h-[240px] flex flex-col justify-between'>
                            <p className="mt-10 lg:text-3xl text-base px-10 font-lato font-light">{item.attributes.description}</p>
                            <div className='flex mb-10 px-7 mt-10 align-top'>
                              <Image
                                height={100}
                                width={100}
                                src={`${
                                  API_URL + 
                                  item.attributes.profileImg.data[0].attributes
                                    .url
                                }`}                                alt={item.imagealt}
                                className="!w-1/3 object-cover h-48  "
                                // shadow-[15px_15px_0_rgba(132,9,255,0.4)]
                              />
                              <div className='ml-16 mt-10 w-1/2'>
                                <p className="font-golden-hopes text-6xl text-[#8409FF]">{item.attributes.name}</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </CarouselItem>
              ))}
              {/* strapi integration */}  
              {/* {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  <div className="p-1">
                    <Card className="border-none bg-black">
                      <CardContent className="flex items-center justify-center p-6">
                        <div className="border-2 border-violet-700  card text-white ">
                          <div className="xl:h-[500px] h-[320px] flex flex-col justify-between">
                            <h6 className="mt-10 xl:text-2xl 2xl:text-4xl text-base px-10 font-lexend">
                              {item.attributes.description}
                            </h6>
                            <div className="flex mb-10 px-7 mt-10 items-center">
                              <Image
                                height={100}
                                width={100}
                                src={`${
                                  API_URL +
                                  item.attributes.profileImg.data[0].attributes
                                    .url
                                }`}
                                alt="My Image"
                                className="xl:!w-[100px] !w-[60px]"
                              />
                              <div className="content-center ml-10 mt-10">
                                <p className="xl:text-2xl lg:text-base text-sm font-lato-light">
                                  {item.attributes.name}
                                </p>
                                <p className="xl:text-2xl  lg:text-base text-sm font-lexend">
                                  {item.attributes.designation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))} */}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
