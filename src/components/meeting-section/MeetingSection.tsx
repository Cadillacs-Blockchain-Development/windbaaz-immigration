import { useState } from 'react';
import ReactLoading from 'react-loading';
import { PiWarningCircleThin } from "react-icons/pi";

const MeetingSection = () => {
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSelectService = (service: string): void => {
    console.log(service);
    setErrorMessage(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setErrorMessage(true);
    }, 2000);

  };



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
      <div className='relative flex px-2 sm:px-10 lg:px-24 flex-col sm:flex-row sm:gap-8'>
        <div className="w-[100%] sm:w-[80%] lg:[w-30%] lg:pr-6 pb-12 sm:py-8 flex flex-col justify-center items-start">
          <h2 className="fm-raleway font-[500] text-[22px] sm:text-[28px] lg:px-8">
            Request Meeting
          </h2>
          <p className="mt-1 text-white fm-lato text-[14px] sm:text-[15px] lg:px-8">
            Would you like to speak to one of our RCIC over the phone? Just book your appointment and we will be in touch shortly. You can also email us if you would prefer.
          </p>
        </div>
        <div className="w-[100%] sm:w-100 lg:w-[96%] p-4 sm:p-10 bg-white text-black">
          <h3 className="text-[20px] fm-raleway text-black font-[700] sm:text-[19px] mb-4">Select Service</h3>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(service)}
                className={`p-4 text-start fm-lato sm:text-center text-[15px] rounded-md ${selectedService === service
                    ? 'bg-black text-white'
                    : 'bg-gray-200'
                  }`}
              >
                {service}
              </button>
            ))}
          </div>
          <div className='flex justify-end align-center'>
            <button
              onClick={() => handleSelectService(selectedService)} // Pass selectedService
              className="mt-6 p-3 px-8 w-fit text-end bg-red-600 text-white hover:bg-red-700"
            >
              {loading ? (
                <div className='flex items-center gap-2'>
                  Next <ReactLoading type='spin' height={14} width={14} color='white' />
                </div>
              ) : "Next"}
            </button>
          </div>
          {errorMessage &&
            <p className='bg-[#fff3cd] mt-5 text-[14px] text-red-500 fm-lato flex items-end py-1 px-1 gap-1'>
              <PiWarningCircleThin size={20} color='red' />
              One or more fields have an error. Please check and try again.
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export default MeetingSection;
