"use client";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";
import showData from "../../../Data/showdata";

import useGetRequest from "../../../api/UseGetRequest";
import endpointData from "../../../api/endpointData";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

const DroneType = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // const { data, loading, error } = useGetRequest(endpointData.droneType);

  // if (loading) return <p>Loading...</p>; // Show loading indicator while fetching data

  // if (error) return <p>Error: {error.message}</p>; // Show error message if request fails


  return (
    <div className=" py-20">
      <div className="flex justify-center lg:mx-20 mx-10">
        <Carousel className="w-full max-w-full ">
          <CarouselContent>
          {showData.map((item, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <div className=''>
                                      

                                        <Card className="bg-transparent border-none">
                                            <CardContent className="flex items-center h-[600px] mx-10 justify-center p-6 -mt-10">
                                                <div className='relative'>
                                                    <Image
                                                        src={item.img}
                                                        alt="Description of your image"
                                                        width={700}
                                                        height={400}
                                                        className='h-[500px] lg:mx-0 mx-8'
                                                    />
                                                    <Image
                                                        src={item.dronImg}
                                                        alt="Description of your image"
                                                        width={400}
                                                        height={200}
                                                        className='absolute  lg:-bottom-20 bottom-2 lg:-left-48 -left-16 lg:w-[400px] w-[200px]'
                                                    />

                                                    <div className='ml-20 lg:-mt-5 -mt-14'>
                                                        <h1 className='text-lg text-white font-lexend'>{item.title}</h1>
                                                        <p className='text-[#909090] font-lexend'>  {item.description}</p>
                                                    </div>
                                                </div>

                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}


{/* strapi integration */}
            {/* {data.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="">
                    <Card className="bg-black border-none">
                      <CardContent className="flex items-center h-[600px] mx-10 justify-center p-6 -mt-10">
                        <div className="relative">
                          <Image
                            src={`${API_URL+item.attributes.ShowImage.data[0].attributes.url}`}
                            alt="Description of your image"
                            width={700}
                            height={400}
                            className="h-[500px] lg:mx-0 mx-8"
                          />
                          <Image
                            src={`${API_URL+item.attributes.DroneImage.data[0].attributes.url}`}
                            alt="Description of your image"
                            width={400}
                            height={200}
                            className="absolute  lg:-bottom-20 bottom-2 lg:-left-48 -left-16 lg:w-[400px] w-[200px]"
                          />

                          <div className="ml-20 lg:-mt-5 -mt-14">
                            <h1 className="text-lg text-white font-lexend">
                              {item.attributes.Title}
                            </h1>
                            <p className="text-[#909090] font-lexend">
                              {" "}
                              {item.attributes.Description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))} */}


          </CarouselContent>
          <div className="lg:-mt-10 -mt-20 flex justify-center font-lexend">
            <CarouselPrevious type={"drone"} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default DroneType;
