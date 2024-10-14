import React from 'react'
import { Card, CardContent } from "../../../../components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../../../components/ui/carousel"

const Social = () => {
  return (
    <div className=' text-center pb-40'>
      
            <h1 className='lg:text-6xl text-2xl text-white pt-20'> SOCIAL PROOF</h1>
      
    <div className='flex justify-center lg:mt-20 mt-10'>
        <Carousel
      opts={{
        align: "center",
      }}
      className="mx-20 w-full"
    >

        <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 bg-black">
                  <h1 className="text-2xl text-white font-semibold">required Data</h1>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='lg:block hidden'>

      <CarouselPrevious />
      <CarouselNext />
      </div>
    </Carousel>

    </div>


    </div>
  )
}

export default Social