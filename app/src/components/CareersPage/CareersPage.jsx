import React from 'react'
import CareesData from '../../../Data/CareesData'
import './CareersPage.css';
import { Button } from 'react-day-picker';

const CareersPage = () => {
    return (
        <div className='mt-48 mb-48'>
            <div className=''>
                <div className='text-[#F5F5F5] font-lexend text-5xl text-center'>WORK AT BOTLAB</div>
                <p className='text-[#F5F5F5] text-xs text-center'>Join the 150+ growing family of innovators</p>
            </div>
            <div className='mt-28'>
                <div className='text-[#F5F5F5] font-lexend text-3xl text-center'>WORK CULTURE</div>
                <p className='text-[#F5F5F5] text-xs text-center'>At BotLab, we have an open culture of constant growth and <br /> improvement, with opportunities for talent to try new things and <br /> gain invaluable experience.</p>
            </div>
            <div className=' mt-20 w-7/12 ml-auto mr-auto'>
                <hr className=''></hr>
            </div>
            {
                CareesData?.map((item, index) => (<div key={index}>
                    <div className='flex flex-col ml-96 mt-8'>
                        <div className='flex'>
                            <div className='div-style'></div>
                            <span className='text-white text-xs ml-3'>{item.subtitle}</span>
                        </div>
                        <div className=''>
                            <p className='text-white text-2xl ml-14 -mt-7'>{item.title}</p>
                        </div>
                        <div className="w-9/12 text-end">
                            <p className='text-white text-xs -mt-6 mr-28'>{item.description}</p>
                        </div>
                    </div>
                    <div className=' mt-4 w-6/12 ml-auto mr-auto'>
                        <hr className=''></hr>
                    </div>
                </div>))}
            <div className=' mt-10 w-7/12 ml-auto mr-auto'>
                <hr className=''></hr>
            </div>
            <div className="flex justify-evenly mt-12">
                <button className='text-black bg-white px-8 py-5 w-1/5 ml-10 font-lexend'>OPEN APPLICATION</button>
                <button className='text-black bg-white px-8 py-5 w-1/5 mr-10 font-lexend'>INTERN AT THE LAB</button>
            </div>
        </div>

    )
}



export default CareersPage;
