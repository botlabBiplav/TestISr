import React from "react";
import Image from "next/image";
import Video from "next-video";


const Location = () => {
  return (
    <> 
      <div className="relative pt-20">
        <div className="py-20 px-60 text-white">
          <p className="px-10 font-lexend text-6xl ">Contact Us</p>
          <p className="px-10 font-lato text-3xl font-light w-2/3">
            <br /><br />
            Want to dazzle your guests with a show that&apos;s out of this world? <br /><br />
            Whether you have a vision for hosting the coolest drone show ever or just have a burning question, we&apos;re ready to make your vision fly!<br />&nbsp;
          </p>
        </div>
        <div className="px-60 flex w-full justify-between">
          <div className="w-1/2 px-10"><iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ePOldk0qTeHOnBz-QtR23bXFavLpj10&ehbc=2E312F&noprof=1&" className="w-full h-full"></iframe></div>
          <div className="text-white w-1/2 px-10 font-lato text-2xl">
            <p className="text-3xl"><span className="font-golden-hopes text-6xl align-middle text-[#8409FF]">Get in touch </span>with us at:</p><br />
            <p className="font-light">
              <a href="mailto:info@botlabdynamics.com">info@botlabdynamics.com</a><br />
              <a href="mailto:business@botlabdynamics.com">business@botlabdynamics.com</a><br /><br />
              <a href="tel:XXXXXXXXX">+91 XXX XXX XXXX</a><br />
              <a href="tel:XXXXXXXXX">+91 XXX XXX XXXX</a><br /><br />
            </p>

            <p className="text-3xl">Or <span className="font-golden-hopes text-6xl align-middle text-[#8409FF]">&nbsp;Come Visit </span>us at:</p><br />
            <p className="font-light">
              5C1, Research and Innovation Park,<br />
              Indian Institute of Technology, Hauz Khas,<br />
              New Delhi - 110016<br /><br />

              E-115, Okhla Phase III Road,<br />
              Okhla Phase III, Okhla Industrial Estate,<br />
              New Delhi - 110020<br />
            </p>

          </div>


        </div>
        <div className="pt-40 flex justify-center">
          <p className="text-3xl text-white font-lexend font-light text-center">
            Or fill out the form below<br />Our reply will be faster than you can say <span className="font-golden-hopes text-6xl align-text-top text-[#8409FF]">Wow!</span>
          </p>
        </div>



      </div>
    </>
  );
};

export default Location;
