import React, { useState } from 'react';
import Image from 'next/image';
import PropellerImg from "../../../../Images/Image/propeller.svg";

const Creative = () => {
  const [count, setCount] = useState(0);
  let list = [
    {
      title: "CREATIVE", description: "Embark on a journey into the future of art, entertainment and advertising with our flexible and scalable drone shows, meticulously customized to elevate your unique theme."
    },
    // {
    //   title: "TECHNICAL", description: "Embark on a journey into the future of art, entertainment and advertising with our flexible and scalable drone shows, meticulously customized to elevate your unique theme."
    // },
    // {
    //   title: "TECHNICAL", description: "Embark on a journey into the future of art, entertainment and advertising with our flexible and scalable drone shows, meticulously customized to elevate your unique theme."
    // },

  ];

  return (
    <>


      <div className='h-[40vh] flex items-center justify-center'>

        <div>
          <Image
            src={PropellerImg}
            alt="Description of your image"
            width={400}
            height={200}
            className=''
          />
        </div>
        {/* <button onClick={() => setCount(count + 1)}>click</button> */}

        {
          list.map((item, index) => (<>
            {index == count && <>

              <div key={index} className='flex  justify-between items-center'>
                <h1 className='text-4xl ml-20'>{item.title}</h1>
                <p className='w-[400px] text-2xl ml-40'>{item.description}</p>
              </div>

            </>}
          </>))
        }




      </div>

    </>
  )
}

export default Creative