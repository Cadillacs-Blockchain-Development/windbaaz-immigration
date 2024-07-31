import { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://windmillimmigration.ca/wp-content/uploads/2022/09/135087-e1663633324529.jpg',
        'https://windmillimmigration.ca/wp-content/uploads/2022/07/Slide-2.jpg',
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-[750px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            >

            </div>
            <div className="relative z-10 flex items-center justify-end w-full h-full pe-5">

                {/* Navigation Buttons */}
                <div className="flex flex-col gap-5">
                    <div
                        className={`cursor-pointer ${currentIndex === 0 ? 'bg-white' : 'bg-inherit'} p-1 border-2 border-white`}
                        onClick={prevSlide}
                    >
                    </div>
                    <div
                        className={`cursor-pointer ${currentIndex === 1 ? 'bg-white' : 'bg-inherit'} p-1 border-2 border-white`}
                        onClick={nextSlide}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
