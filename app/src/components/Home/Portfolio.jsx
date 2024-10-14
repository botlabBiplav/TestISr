// import Image from "next/image";
// import ViewImg from "../../../../Images/Image/view.png"
// import ReachImg from "../../../../Images/Image/reach.png"
// import ShareImg from "../../../../Images/Image/share.png"
// // import PortfolioData from "../../../Data/PortfolioData";
// const Portfolio = () => {
//     return (
//         <div className="mt-10">
//             <div className="flex justify-center mr-96">
//                 <div>
//                     <h1 className="text-white text-4xl font-lexend">The House of <br /> <span className="">Abhinandan Lodha</span></h1>
//                     <h1 className="text-gray-400 mt-1">Lighting Up a Global Campaign with an Integrated Drone Show</h1>
//                     <h1 className="text-white text-[12px] mt-1">GURGAON | INDIA</h1>
//                     <h1 className="text-gray-400 text-[12px]">JUN 02, 2024</h1>
//                 </div>
//             </div>

//             <div className="ml-[335px]">
//                 <div className="">
//                     <h1 className="text-white text-2xl font-lato mt-10">Project Overview</h1>
//                     <div className="">
//                         <span className="text-white flex text-[15px] ml-12 mt-3 mr-24">Client: <p className="text-gray-400"> The House of Abhinandan Lodha</p></span>
//                         <span className="text-white flex text-[15px] ml-12 mt-1">Industry: <p className="text-gray-400 items-center">Real estate</p></span>
//                         <span className="text-white flex text-[15px] ml-12 mt-1">Event: <p className="text-gray-400 items-center">Project pre-launch</p></span>
//                         <span className="text-white flex text-[15px] ml-12 mt-1">Location: <p className="text-gray-400 items-center">Orana Convention Center, Gurugaon</p></span>
//                         <span className="text-white flex text-[15px] ml-12 mt-1">No. of drones: <p className="text-gray-400 items-center">700</p></span>
//                         <span className="text-white flex text-[15px] ml-12 mt-1">Reach: <p className="text-gray-400 items-center">5 Crore+</p></span>
//                     </div>
//                 </div>
//             </div>
//             <div className="ml-28 mt-5 flex justify-center">
//                 <iframe className="flex justify-center w-[1000px] h-[500px] aspect-video" src="https://www.youtube.com/embed/zwe5pkAE5gw?si=jtR8pUdjN8YeLt-6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//             </div>
//             <div className="ml-80 mt-5">
//                 <h1 className="text-gray-400 text-[17px]">The</h1>
//                 <h1 className="text-white text-[25px]">ASK</h1>
//                 <ul>
//                     <li className="text-gray-400 text-[14px] font-lexend">To integrate a drone light show into a global project pre-launch campaign</li>
//                     <li className="text-gray-400 text-[14px] font-lexend">To manage the entire event around the drone show.</li>
//                 </ul>
//             </div>
//             <div className="ml-80 mt-5">
//                 <h1 className="text-gray-400 text-[17px]">The</h1>
//                 <h1 className="text-white text-[25px]">Approach</h1>

//                 <p className="text-gray-400 font-lexend text-[15px] w-2/4">The pre-launch campaign of The Sarayu, a branded land development project,
//                     aimed to leverage technology to tell the emotive story of Ayodhya’s rise as the global spiritual capital and call upon Indians abroad to return to their spiritual homeland.
//                     <br />
//                     <br />
//                     The drone show in Delhi was envisioned as the climax of a global campaign which began with tech-first advertising solutions in New York and Dubai.
//                     The show was meant to be live-streamed via a Zoom link which would be joined by almost 75,000+ people worldwide.</p>
//             </div>
//             <div className="ml-80 mt-5">
//                 <h1 className="text-white text-[25px]">The Show Visuals</h1>
//                 <p className="text-gray-400 font-lexend text-[15px] w-2/4">The show design drew from the client’s ongoing campaign for consistency across international activations.
//                     The narrative seamlessly transported spectators from history to modernity, and from Ayodhya to the world as spiritual motifs like Lord Ram’s visage and the
//                     Ayodhya temple reformed into spectacular drone formations of landmarks from across target locations, evoking nostalgic connections to NRIs’ hybrid Indian and global identities. Finally,
//                     the persuasive call for Indians to return home was accompanied by a life-like portrait of Amitabh Bachchan, the brand ambassador of The Sarayu.</p>
//             </div>
//             <div>
//                 <h1 className="text-white text-2xl font-lato ml-80 mt-10 text-[25px]">Voice-over Script</h1>
//                 <div className="">
//                     <span className="text-white flex text-[15px] ml-80 mt-1">Language: <p className="text-gray-400">English & Hindi</p></span>
//                     <span className="text-white flex text-[15px] ml-80 mt-1">Tone: <p className="text-gray-400 items-center">Solemn,revent</p></span>
//                     <p className="text-gray-400 items-center ml-80 mt-5">Emotive language used to invoke yearning for NRIs’ spiritual home in Ayodhya, <br />paralleling Lord Ram’s return.</p>
//                 </div>
//             </div>

//             <div>
//                 <h1 className="text-white text-2xl font-lato ml-80 mt-10 text-[25px]">Voice-over Artist</h1>
//                 <div className="">
//                     <p className="text-gray-400 items-center ml-80 mt-5 w-2/4">Male artist with a baritone voice selected keeping in mind other client advertising of The Sarayu, the solemn spiritual and sentimental atmospherics of the show, and brand ambassador Amitabh Bachchan, whose portrait was also part of the show.</p>
//                 </div>
//             </div>
//             <div>
//                 <h1 className="text-white text-2xl font-lato ml-80 mt-10 text-[25px]">Music</h1>
//                 <div className="">
//                     <p className="text-gray-400 items-center ml-80 mt-3">Rousing instrumental music created an immersive cultural and spiritual soundscape.</p>
//                 </div>

//                 <div className="mt-5 ml-80">
//                     <p className="text-gray-400 items-center w-2/4">We managed the entire event around the drone show, including venue management, curating a lighting experience complementary to the drone show, identifying the right voice-over artist for live narration, and providing live-stream support via an aerial filming angle and a live audience footage for the online audience.</p>
//                 </div>
//                 <div className="ml-80">
//                     <p className="text-gray-400 items-center mt-5  w-2/4">Our expert production team delivered a video ad documenting the show to the client within 2 days. We filmed audience testimonials, operated filming drones to collate multiple angles for video production, scripted the video, and interfaced with the voice-over artist for video narration. The result was a visually stunning video that captured both the high emotion and masterful artistry of the show, which the client posted across social media platforms.</p>
//                 </div>
//             </div>
//             <div className="ml-80 mt-5">
//                 <div>
//                     <h1 className="text-gray-400 text-[17px]">The</h1>
//                     <h1 className="text-white text-[25px]">ACHIEVEMENT</h1>
//                 </div>
//             </div>


//             <div className="mt-10 ml-96">
//                 <h1 className="text-white text-[30px]">Global Launch Video in first 24 hours:</h1>
//                 <div className="flex mt-10">
//                     <span className="">
//                         <Image
//                             src={ViewImg}
//                             width={100}
//                             height={100}
//                         />
//                         <h1 className="text-white text-center">51,00,000+</h1>
//                         <h1 className="text-white text-center">VIEWS</h1>
//                     </span>
//                     <span className="">
//                         <Image
//                             src={ShareImg}
//                             width={100}
//                             height={100}
//                             className="ml-52"
//                         />
//                         <div className="ml-52">
//                             <h1 className="text-white text-center">51,00,000+</h1>
//                             <h1 className="text-white text-center">SHARES</h1>
//                         </div>
//                     </span>
//                     <span className="">
//                         <Image
//                             src={ReachImg}
//                             width={100}
//                             height={100}
//                             className="ml-52"
//                         />
//                         <div className="ml-52">
//                             <h1 className="text-white text-center">51,00,000+</h1>
//                             <h1 className="text-white text-center">REACH</h1>
//                         </div>
//                     </span>
//                 </div>
//             </div>

//             <div className="mt-20">
//                 <h1 className="text-white flex justify-center text-[30px]">DRONE SHOW SPECIFIC POSTS</h1>
//                 <div className="flex mt-10">
//                     <span className="">
//                         <Image
//                             src={ViewImg}
//                             width={100}
//                             height={100}
//                             className="ml-96"

//                         />
//                         <div className="ml-96">
//                             <h1 className="text-white text-center">-</h1>
//                             <h1 className="text-white text-center">VIEWS</h1>
//                         </div>
//                     </span>
//                     <span className="">
//                         <Image
//                             src={ShareImg}
//                             width={100}
//                             height={100}
//                             className="ml-52"
//                         />
//                         <div className="ml-52">
//                             <h1 className="text-white text-center">-</h1>
//                             <h1 className="text-white text-center">SHARES</h1>
//                         </div>
//                     </span>
//                     <span className="">
//                         <Image
//                             src={ReachImg}
//                             width={100}
//                             height={100}
//                             className="ml-52"
//                         />
//                         <div className="ml-52">
//                             <h1 className="text-white text-center">-</h1>
//                             <h1 className="text-white text-center">REACH</h1>
//                         </div>
//                     </span>
//                 </div>
//             </div>

//             <div className="mt-5 flex justify-cente ml-80">
//                 <div>
//                     <h1 className="text-gray-400 text-[17px]">The</h1>
//                     <h1 className="text-white text-[25px]">Appraisal</h1>
//                     <h1 className="text-gray-400 w-2/4">Drone light shows inspire great curiosity and awe from Non-Resident Indians and global audiences, as proven by the huge audience that tuned in to watch the live broadcast of the show as well as measurably high online engagement across all social media platforms.</h1>
//                     <br />
//                     <h1 className="text-gray-400 mt-[1px] w-2/4">Additionally, despite not aiming to draw an organic crowd, large numbers gathered at the nearby mall market front, with even shop owners and workers pausing their work to watch the entire show. Drone light shows have tremendous potential as a guerilla marketing strategy characterised by high on-ground engagement even with minimal pre-marketing as well as significant online buzz within a 4 km radius due to a show’s high visibility.</h1>
//                     <br />
//                     <h1 className="text-gray-400 mt-[1px] w-2/4">Drone light shows are the next step in experiential storytelling, and can both serve as an immersive showstopper bookending a cutting-edge campaign or as a stand-alone event creating a novel, high-impact brand activation.</h1>
//                 </div>
//             </div>

//             <div className="ml-80 mt-10">
//                 <div>
//                     <h1 className="text-white text-xl font-lexend">ADDITIONAL RELEVENT MEDIA</h1>
//                     <h1 className="text-gray-400 text-[12px]">Case Study</h1>
//                     <h1 className="text-gray-400 text-[12px]">Video</h1>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default Portfolio;