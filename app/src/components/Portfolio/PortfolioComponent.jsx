import Image from "next/image";
import ViewImg from "../../../../Images/Image/view.png";
import ReachImg from "../../../../Images/Image/reach.png";
import ShareImg from "../../../../Images/Image/share.png";
import PortfolioData from "../../../Data/PortfolioData";

import LightGallery from "lightgallery/react";
import { useRef, useState, useCallback, useEffect } from "react";
import "../../../style/gallery.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need

import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

const PortfolioComponent = () => {
  const lightGallery = useRef(null);

  return (
    <div className="mt-44">
      {PortfolioData.map((item, index) => (
        <div key={index} className="mb-10 xl:ml-72 lg:ml-48 md:ml-36">
          {/* Conditional Rendering Based on Available Data */}
          <div>
            {item.Title && (
              <h1 className="text-white lg:text-4xl text-xl font-lexend">
                {item.Title}
              </h1>
            )}
            {item.Title0 && (
              <h1 className="text-white lg:text-4xl text-xl font-lexend">
                {item.Title0}
              </h1>
            )}
            {item.subtitle && (
              <h1 className="text-gray-400 mt-1">{item.subtitle}</h1>
            )}
            {item.eventPlace && (
              <h1 className="text-white text-[12px] mt-2">{item.eventPlace}</h1>
            )}
            {item.eventDate && (
              <h1 className="text-gray-400 text-[12px] mt-0">
                {item.eventDate}
              </h1>
            )}
          </div>

          {/* Rendering Project Overview Details */}
          <div>
            {item.Title1 && (
              <h1 className="text-white text-2xl font-lato">{item.Title1}</h1>
            )}
            {item.Clientname && (
              <div className="flex">
                <div className="text-white text-[15px] w-28 text-right">
                  {item.Clientname}
                </div>
                <div className="text-gray-400 ml-1 ">{item.Client}</div>
              </div>
            )}
            {item.Industryname && (
              <div className="flex">
                <div className="text-white text-[15px] w-28 text-right">
                  {item.Industryname}
                </div>
                <div className="text-gray-400 ml-1 ">{item.Industry}</div>
              </div>
            )}
            {item.Eventname && (
              <div className="flex">
                <div className="text-white text-[15px] w-28 text-right">
                  {item.Eventname}
                </div>
                <div className="text-gray-400 ml-1 ">{item.Eventname}</div>
              </div>
            )}
            {item.Locationname && (
              <div className="flex">
                <div className="text-white text-[15px] w-28 text-right">
                  {item.Locationname}
                </div>
                <div className="text-gray-400 ml-1 ">{item.Location}</div>
              </div>
            )}
            {item.dronesname && (
              <div className="flex">
                <div className="text-white text-[15px] w-28 text-right">
                  {item.dronesname}
                </div>
                <div className="text-gray-400 ml-1 ">{item.drones}</div>
              </div>
            )}

            {item.Reachname && (
              <div className="flex">
                <div className="text-white text-[15px] w-28 text-right">
                  {item.Reachname}
                </div>
                <div className="text-gray-400 ml-1 ">{item.Reach}</div>
              </div>
            )}
          </div>
          {/* Media Rendering */}
          {item.vidUrl && (
            <div className="mt-5">
              <iframe
                className="xl:w-[1000px] xl:h-[500px] lg:w-[650px] lg:h-[350px] md:w-[600] md:h-[300px] aspect-video"
                src={item.vidUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {item.Title11 && (
            <h1 className="text-gray-400 text-[17px]">{item.Title11}</h1>
          )}
          {item.Title2 && (
            <h1 className="text-white lg:text-4xl text-xl font-lexend">
              {item.Title2}
            </h1>
          )}
          {item.subtitle1 && (
            <ul className="text-white text-[15px] mt-1 ml-7 list-disc">
              <li className="text-gray-400">{item.subtitle1}</li>
              <li className="text-gray-400">{item.subtitle2}</li>
            </ul>
          )}

          {item.Title12 && (
            <h1 className="text-gray-400 text-[17px]">{item.Title12}</h1>
          )}
          {item.Title3 && (
            <h1 className="text-white lg:text-4xl text-xl font-lexend">
              {item.Title3}
            </h1>
          )}
          {item.subtitle3 && (
            <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-5">
              {item.subtitle3}
            </p>
          )}
          {item.subtitle4 && (
            <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-5">
              {item.subtitle4}
            </p>
          )}

          {item.Title4 && (
            <h1 className="text-white lg:text-4xl text-xl font-lexend ml-16">
              {item.Title4}
            </h1>
          )}
          {item.description1 && (
            <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-3 ml-16">
              {item.description1}
            </p>
          )}

          {item.Title5 && (
            <h1 className="text-white text-2xl font-lato ml-16">
              {item.Title5}
            </h1>
          )}
          {item.Languagesname && (
            <span className="text-white flex text-[15px] mt-1 ml-16">
              {item.Languagesname}{" "}
              <span className="text-gray-400 ml-2">{item.Languages}</span>
            </span>
          )}
          {item.Tonename && (
            <span className="text-white flex text-[15px] ml-16">
              {item.Tonename}{" "}
              <span className="text-gray-400 ml-2">{item.Tone}</span>
            </span>
          )}
          {item.description2 && (
            <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-3 ml-16">
              {item.description2}
            </p>
          )}
          <div className="">
            {item.Title6 && (
              <h1 className="text-white text-2xl font- mt-10 ml-16">
                {item.Title6}
              </h1>
            )}
            {item.description3 && (
              <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-2 ml-16">
                {item.description3}
              </p>
            )}
          </div>

          <div className="">
            {item.Title7 && (
              <h1 className="text-white text-2xl font- mt-10 ml-16">
                {item.Title7}
              </h1>
            )}
            {item.description4 && (
              <p className="text-gray-400 font-lexend text-[15px] w-2/3 m-2 ml-16">
                {item.description4}
              </p>
            )}
            {item.subtitle5 && (
              <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-10">
                {item.subtitle5}
              </p>
            )}
            {item.subtitle6 && (
              <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-3">
                {item.subtitle6}
              </p>
            )}
          </div>

          {item.gallery && (
            <div className="	bg-blend-darken">
              <LightGallery
                plugins={[lgZoom, lgVideo]}
                mode="lg-fade"
                elementClassNames="container"
              >
                <a data-src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+261.png">
                  <Image
                    src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+261.png"
                    width={404}
                    height={400}
                    className="card1"
                    alt="card Image"
                  />
                </a>
                <a data-src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+259.png">
                  <Image
                    src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+259.png"
                    width={611}
                    height={400}
                    alt="card Image"
                    className="card2 lg:!w-[580px] xl:!w-[611px]"
                  />
                </a>
                <a data-src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png">
                  <Image
                    src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png"
                    width={404}
                    height={400}
                    alt="card Image"
                    className="card3"
                  />
                </a>
              </LightGallery>
            </div>
          )}

          <div>
            {item.Titlename && (
              <h1 className="text-gray-400 text-[17px]">{item.Titlename}</h1>
            )}
            {item.Title8 && (
              <h1 className="text-white lg:text-4xl text-xl font-lexend">
                {item.Title8}
              </h1>
            )}
          </div>

          {/* {here need to image} */}

          {/* gallery components */}

          <div className="">
            {item.subtitle7 && (
              <h1 className="text-white text-[30px] mt-10 xl:ml-52">
                {item.subtitle7}
              </h1>
            )}
            <div>
              {item.icons1 && (
                <div className="flex mt-4 xl:ml-44 xl:space-x-28 lg:space-x-16 md:space-x-12">
                  {item.icons1.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-center">
                      <Image
                        src={icon.img}
                        width={80}
                        alt={icon.name1}
                        className="mx-auto ml-6"
                      />
                      <p className="text-white ml-6">{icon.count1}</p>
                      <p className="text-white ml-6">{icon.name1}</p>
                      <p className="text-white ml-6">{icon.count2}</p>
                      <p className="text-white ml-6">{icon.name2}</p>
                      <p className="text-white ml-6">{icon.count3}</p>
                      <p className="text-white ml-6">{icon.name3}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="">
            {item.Title13 && (
              <h1 className="text-white text-[23px] mt-14 xl:ml-72 lg:ml-24 md:ml-20">
                {item.Title13}
              </h1>
            )}
            <div>
              {item.icons1 && (
                <div className="flex mt-4 xl:ml-44 xl:space-x-28 lg:space-x-14 md:space-x-12">
                  {item.icons1.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-center">
                      <Image
                        src={icon.img}
                        width={80}
                        alt={icon.name1}
                        className="mx-auto ml-6"
                      />
                      <p className="text-white ml-6">{icon.count4}</p>
                      <p className="text-white ml-6">{icon.name1}</p>
                      <p className="text-white ml-6">{icon.count5}</p>
                      <p className="text-white ml-6">{icon.name2}</p>
                      <p className="text-white ml-6">{icon.count6}</p>
                      <p className="text-white ml-6">{icon.name3}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            {item.Title9name && (
              <h1 className="text-gray-400 text-[17px]">{item.Title9name}</h1>
            )}
            {item.Title9 && (
              <h1 className="text-white lg:text-4xl text-xl font-lexend">
                {item.Title9}
              </h1>
            )}
            {item.subtitle8 && (
              <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-5">
                {item.subtitle8}
              </p>
            )}
            {item.subtitle9 && (
              <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-5">
                {item.subtitle9}
              </p>
            )}
            {item.subtitle20 && (
              <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-5">
                {item.subtitle20}
              </p>
            )}
          </div>
          <div>
            {item.Title10 && (
              <h1 className="text-white text-2xl font-lato">{item.Title10}</h1>
            )}
            {item.subtitle10 && (
              <p className="text-gray-400 font-lexend text-[15px] w-2/3 mt-1">
                {item.subtitle10}
              </p>
            )}
            {item.subtitle11 && (
              <p className="text-gray-400 font-lexend text-[15px] w-2/3 -mt-1">
                {item.subtitle11}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioComponent;
