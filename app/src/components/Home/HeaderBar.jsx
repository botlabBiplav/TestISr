import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import brandlogo from "../../../../Images/Logos/wordmarkWhite.png";

const HeaderBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="px-10 py-2 bg-black/75 w-auto backdrop-blur">
      <div className="mx-auto my-2 flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          <Image
            className="sm:w-48 w-2/3"
            width={300}
            height={200}
            src={brandlogo}
            alt="BotLab Dynamics Logo"
          />
        </Link>
        <div className="lg:hidden z-50">

          <button onClick={toggleMenu}>
            {menuOpen ? (
              <XIcon className="h-10 w-10 text-white" />
            ) : (
              <MenuIcon className="h-10 w-10 text-white" />
            )}
          </button>
        </div>

        <div className={`fixed inset-0 h-screen bg-black/90 z-40 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>

          <ul className="flex pt-40 flex-col items-center justify-start h-auto space-y-6">
            <li className={`opacity-0 transform ${menuOpen ? 'opacity-100 translate-x-0 delay-150' : 'translate-x-10'} transition-all duration-200`}>
              <Link href="/" className="font-lexend text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
                HOME
              </Link>
            </li>
            <li className={`opacity-0 transform ${menuOpen ? 'opacity-100 translate-x-0 delay-200' : 'translate-x-10'} transition-all duration-200`}>
              <Link href="/Portfolio" className="font-lexend text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
                PORTFOLIO
              </Link>
            </li>
            <li className={`opacity-0 transform ${menuOpen ? 'opacity-100 translate-x-0 delay-200' : 'translate-x-10'} transition-all duration-200`}>
              <Link href="/Careers" className="font-lexend text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
                CAREERS
              </Link>
            </li>
            <li className={`opacity-0 transform ${menuOpen ? 'opacity-100 translate-x-0 delay-200' : 'translate-x-10'} transition-all duration-200`}>
              <Link href="/ContactUs" className="font-lexend text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
                CONTACT US
              </Link>
            </li>
            <li className={`opacity-0 transform ${menuOpen ? 'opacity-100 translate-x-0 delay-200' : 'translate-x-10'} transition-all duration-200`}>
              <Link href="/Privacy_Policy" className="text-white text-sm flex font-lexend text-center justify-center self-end mt-80 font-light hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
                Privacy Policy
              </Link>
            </li>
            <li className={`opacity-0 transform ${menuOpen ? 'opacity-100 translate-x-0 delay-200' : 'translate-x-10'} transition-all duration-200`}>
              <p className='text-white text-sm flex font-lexend text-center justify-center self-end font-light'>&copy; BotLab Dynamics Pvt. Ltd. 2024</p>
            </li>
          </ul>
        </div>

        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link href="/" className="font-lexend text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/Portfolio" className="font-lexend text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="/Careers" className="font-lexend text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
              CAREERS
            </Link>
          </li>
          <li>
            <Link href="/ContactUs" className="font-lexend text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
              CONTACT US
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default HeaderBar;
