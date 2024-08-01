import React from 'react';
import Rcc from "../../assets/images/RCIC_EN_IMAGES.jpg"
import bgImage from "../../assets/images/Boat.webp"
import { IoMdCheckmark } from "react-icons/io";


const Immigration = () => {
  return (
    <div className="flex justify-center items-center  w-[100%] bg-gray-100">
      <div className="w-[100%] flex flex-col  md:flex-row items-center">
        <div className="h-[350px] text-center sm:min-h-[930px] lg:min-h-[650px] w-[100%] migration  md:w-1/2 p-8  text-white flex flex-col lg:px-10  justify-center items-center lg:items-start">

         <img
            src={bgImage}
            alt="Lighthouse"
            className='h-[180px] w-[180px] sm:h-[250px] sm:w-[250px] rounded-[50%] '
          />
          
          <span className="mt-4 text-center text-[23px]  fm-raleway font-[500]">
            RCIC Member, Nova Scotia,
            <p>Canada </p>
            <p className="text-center text-[15px] fm-lato">
            WIS Canada
          </p>
          </span>
        
        </div>
        <div className="sm:fm-lato  h-auto py-8 lg:h-[650px] md:w-1/2 p-4 sm:p-8 text-[rgb(51,51,51)]">
          <h2 className="text-[33px] fm-raleway  font-[500] text-[rgb-[51,51,51]] ">
            All you need for your Immigration
          </h2>
          <p className="mt-4 flex-col items-start fm-lato lg:flex-row flex lg:items-center text-[15px] gap-1">
            Yes, We are RCIC Licensed Professionals.
            <img src={Rcc} alt="rcc logo" 
  
            />
          </p>
          <p className="mt-4 text-gray-600 fm-lato text-[16px] text-justify sm:text-start">
            Immigration is probably one of the most vital decisions you will ever make in your life and WIS strives to make that process as hassle-free as possible for you with the help of experience and knowledge of <span className="text-[rgb(51,51,51)] fm-lato font-[700]">RCIC Licensed professionals.</span>
          </p>
          <p className="mt-4 fm-lato text-[16px] text-[rgb(51,51,51)] text-justify sm:text-start">
            In order to assist you in the most competent manner, we constantly monitor immigration laws and regulations and are abreast of any changes that might affect our clients’ business, employees, or individual applications. The constant monitoring helps us in possessing the information and capability that can make immigration application easier for our current as well as future clients, and ensure the best possible application result. Immigration procedures can be complicated, expensive and success can be tricky to achieve. However, with us taking care of all your immigration needs, we make it our mission to eradicate the usual stress and make it a hassle-free, smooth and enjoyable immigration experience for you.
          </p>
          <p className="mt-4 text-[rgb(51,51,51)] flex justify-start items-start gap-2 cursur-pointer">
           <IoMdCheckmark className='md:size-[40px] lg:size-[28px] size-[60px]' />
           <a href="mailto:https://college-ic.ca/protecting-the-public/find-an-immigration-consultant" className="text-black">
           Authenticity can be confirmed from link: 
           <strong className='text-[rgb(51,51,51)] fm-lato font-[700] '> https://college-ic.ca/protecting-the-public/find-an-immigration-consultant</strong>
            </a>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Immigration;
