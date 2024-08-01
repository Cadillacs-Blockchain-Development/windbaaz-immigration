
import React, { useState } from 'react';

const MeetingSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    "Admissions/Study Permits",
    "Business Immigration",
    "Family/Spousal Sponsorship",
    "PR/PNP Consultation",
    "Admissions/Study Permits - Online",
    "Business Immigration - Online",
    "Family/Spousal Sponsorship - Online",
    "PR/PNP Consultation - Online"
  ];

  return (
    <div className="wis-meeting-section">
      <div className='z-20 relative flex px-2 sm:px-10 lg:px-24 flex-col sm:flex-row  sm:gap-8'>
        <div className=" w-[100%] sm:w-[80%] lg:[w-30%]  lg:pr-6 pb-12 sm:py-8 flex flex-col justify-center items-start">
          <h2 className="fm-raleway  font-[500] text-[22px] sm:text-[28px] lg:px-8">
            Request Meeting
          </h2>
          <p className="mt-1 text-white fm-lato text-[14px] sm:text-[15px] lg:px-8">
            Would you like to speak to one of our RCIC over the phone? Just book your appointment and we will be in touch shortly. You can also email us if you would prefer.
          </p>
        </div>
        <div className="w-[100%]  sm:w-100 lg:w-[96%] p-4 sm:p-10 bg-white text-black">
          <h3 className=" text-[20px] fm-raleway text-black font-[700] sm:text-[19px] mb-4">Select Service</h3>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(service)}
                className={`p-4 text-start fm-lato sm:text-center text-[15px] rounded-md ${
                  selectedService === service
                    ? 'bg-black text-white'
                    : 'bg-gray-200'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
          <div className='flex justify-end align-center'>
            <button className="mt-6 p-3 px-8 w-fit text-end bg-red-600 text-white hover:bg-red-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingSection;
