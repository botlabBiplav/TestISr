import facebookIcon from "../../../../Images/Icons/facebookicon.svg";
import instagramIcon from "../../../../Images/Icons/instagram.svg";
import linkedinIcon from "../../../../Images/Icons/linkedin.svg";
import twitterIcon from "../../../../Images/Icons/twitter.svg";
import websitelogo from "../../../../Images/Logos/wordmarkWhite.png";
import youtubeIcon from "../../../../Images/Icons/youtube.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black font-light font-lexend">
      <div className="sm:mx-auto w-full opacity-55">
        <div className="sm:pt-20 grid sm:grid-cols-3 gap-4 sm:px-4 px-12 sm:py-2 lg:py-8 py-12 md:grid-cols-3 sm:divide-x-[1px] divide-gray-500">
          <div className="flex items-center sm:justify-center ">
            <div className="text-white">
              <Image
                className="lg:w-[300px] w-[200px]"
                width={300}
                height={200}
                src={websitelogo}
                alt="BotLab Dynamics Logo"
              />
              <span className="flex mt-2 w-[200px] justify-between">
                <a href=''><Image
                  className=""
                  width={25}
                  height={25}
                  src={facebookIcon}
                  alt="facebook icon"
                /></a>
                <Image
                  className=""
                  width={25}
                  height={25}
                  src={instagramIcon}
                  alt="instagram icon"
                />
                <Image
                  className=""
                  width={25}
                  height={25}
                  src={twitterIcon}
                  alt="twitter icon"
                />
                <Image
                  className=""
                  width={25}
                  height={25}
                  src={linkedinIcon}
                  alt="linkedin icon"
                />
                <Image
                  className=""
                  width={25}
                  height={25}
                  src={youtubeIcon}
                  alt="youtube icon"
                />
              </span>
              <p className="mt-3 lg:text-xl text-sm">
                &copy; BotLab Dynamics Pvt. Ltd. 2024
              </p>
            </div>
          </div>
          <div className="flex sm:justify-center">
            <ul className="text-white sm:ml-5 flex flex-col justify-between gap-8">
              <li className="">
                <p className=" lg:text-xl text-sm">
                  5C1, Research and Innovation Park,
                  <br />
                  Indian Institute of Technology, Hauz Khas,
                  <br />
                  New Delhi - 110016
                </p>
              </li>
              <li className="">
                <p className=" lg:text-xl text-sm">
                  E115, Okhla Phase III Road,
                  <br />
                  Okhla Phase III, Okhla Industrial Estate,
                  <br />
                  New Delhi - 110016
                </p>
              </li>
            </ul>
          </div>
          <div className="flex sm:justify-center">
            <ul className="text-white lg:text-xl text-sm sm:ml-5 flex flex-col justify-between">
              <li className="">
                <Link href='/ContactUs'>Contact Us</Link>
              </li>
              <li className="">
                <Link href='/Privacy_Policy'>Privacy Policy</Link>
              </li><br/>
              <li className="">
                <h1 className="lg:text-xl text-sm">info@botlabdynamics.com</h1>
              </li>
              <li>
                <p>+919058484934</p>
              </li>
              <li className="">
                <p className="">+919058484934</p>
                {/* <p>+919058484934</p> */}
              </li>
            </ul>
          </div>
          {/* <div className="flex">
                        <ul className="text-gray-500 dark:text-gray-400 ml-5 lg:text-lg text-xs flex flex-col justify-between">
                            <li className="">
                                <h3>About Us</h3>
                            </li>
                            <li className="">
                                <h3>Services</h3>
                            </li>
                            <li className="">
                                <h3>Resources</h3>
                            </li>
                            <li className="">
                                <h3>Gallery</h3>
                            </li>
                            <li className="">
                                <h3>Carees</h3>
                            </li>
                        </ul>
                    </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
