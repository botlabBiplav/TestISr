"use client";
import Image from "next/image";
import Input from "../Form/Input";
import DatePicker from "./DatePicker";
import droneImage from "../../../../Images/Image/formdrone.svg";
import DroneProps from "./DronProps";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Form() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN
  const [responseMessage, setResponseMessage] = useState("");
  const [showdate, setShowDate] = useState("txt");
  const [inpHandle, setInputHandle] = useState({
    fullName: "",
    number: "",
    email: "",
    handle: "",
    venue: "",
    date: "",
  });

  const handleInputField = (event) => {
    setInputHandle((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault(); // Prevent page reload
    // const { fullName, number, email, handle, venue, date } = inpHandle;
    // if (!fullName || !number || !email || !handle || !venue || !date) {
    //   setResponseMessage('All fields are required.');
    //   return;
    // }

    console.log('workingdtatftfytf',inpHandle)

    try {
      const response = await axios.post(
        'http://localhost:1337/api/contact-forms',
        formData,
        {
          headers: {
            'Authorization': token, // Replace with your actual token
            'Content-Type': 'application/json', // Specify the content type
          }
        }
      );

      console.log(response,'formDatafinder')

      if (response.status === 200) {
        setResponseMessage('Form submitted successfully!');
        setFormData({
          fullName: '',
          number: '',
          email: '',
          handle: '',
          venue: '',
          date: '',
        }); // Clear form
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        setResponseMessage(
          `Error: ${error.response.data.error || 'An error occurred'}`
        );
      } else {
        // Network error or no response
        setResponseMessage('An unexpected error occurred.');
      }
    }

  }

  useEffect(()=>{
    console.log(showdate,'dataedas')
  },[showdate])


  return (
    <>
      <div className="px-40 flex justify-center t-80 items-center">
        <div className="grid grid-cols-2 lg:mx-20 mx-5 2xl:mx-60 xl:mx-32">
          <div className="px-10">
    

            <DroneProps />
          </div>
          <div className="content-center py-8 px-10">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between lg:space-x-4 space-x-2">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-black text-white xl:py-4 lg:py-3 py-[8px] lg:text-2xl text-sm "
                  name="fullName"
                  value={inpHandle.fullName}
                  onChange={handleInputField}
                />
                <Input
                  type="number"
                  placeholder="Phone Number"
                  name="number"
                  className="bg-black text-white xl:py-4 lg:py-3 py-[8px] lg:text-2xl text-sm"
                  value={inpHandle.number}
                  onChange={handleInputField}
                />
              </div>
              <div className="lg:mt-10 mt-5">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-black text-white xl:py-4 lg:py-3 py-[8px] lg:text-2xl text-sm"
                  name="email"
                  value={inpHandle.email}
                  onChange={handleInputField}
                />
              </div>
              <div className="lg:mt-10 mt-5">
                <Input
                  type="text"
                  placeholder="What type of event"
                  className="bg-black text-white xl:py-4 lg:py-3 py-[8px] lg:text-2xl text-sm"
                  name="handle"
                  value={inpHandle.handle}
                  onChange={handleInputField}
                />
              </div>
              <div className="flex justify-between mt-5 lg:space-x-3 space-x-2 xl:mt-10">
                <Input
                  type="text"
                  placeholder="venue"
                  className="bg-black text-white xl:py-4 lg:py-3 py-[8px] lg:text-2xl text-sm"
                  name="venue"
                  value={inpHandle.venue}
                  onChange={handleInputField}
                />
               
                <DatePicker selectedDate = {()=>setShowDate()}/>
              </div>
            <div className="flex justify-start mt-10">
                <button type="submit" className="text-md CTA lg:py-2 lg:px-20 px-5 flex lg:-mt-5 -mt-5 xl:-mt-1">SUBMIT</ button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}
