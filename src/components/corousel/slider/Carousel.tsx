import React, { useState } from 'react';
import styles from './Carousel.module.css';

const images = [
  {
    src: 'https://windmillimmigration.ca/wp-content/uploads/2022/09/135087-e1663633324529.jpg',
    alt: 'Moraine lake at sunset in autumn, Banff, Canada',
    title: 'Directing the ways for you',
    buttons: [
      { text: 'Book Appointment', href: '#book-appointment', style: 'btn-orange' },
      { text: 'Free Assessment', href: 'https://windmillimmigration.ca/free-assessment/', style: 'btn-white' }
    ]
  },
  {
    src: 'https://windmillimmigration.ca/wp-content/uploads/2022/07/Slide-2.jpg',
    alt: 'Slide2',
    title: 'We will help to immigrate for your future',
    buttons: [
      { text: 'Discover Your Options', href: 'https://windmillimmigration.ca/immigrate/', style: 'btn-orange' }
    ]
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.carouselItem}>
              <div className={styles.slideBackground}>
                <img src={image.src} alt={image.alt} />
              </div>
              <div className={styles.container}>
                <div className={styles.row}>
                  <div className={`${styles.slideContent} mx-4 sm:mx-10 lg:mx-32 w-[70%]`}>
                    <div className={styles.colMd6}>
                      <h1>{image.title}</h1>
                      <div className={styles.slideCallToActions}>
                        {image.buttons.map((button, idx) => (
                          <a
                            key={idx}
                            className={`${styles.btn} ${styles[button.style]} ${styles.btnLg}`}
                            href={button.href}
                          >
                            {button.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className={`${styles.owlNavButton} ${styles.owlPrev}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={(currentIndex==0?{background:"lightgray"}:{backgroundColor:"none"})}
        >
        
        </button>
        <button
          type="button"
          className={`${styles.owlNavButton} ${styles.owlNext} `}
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          style={(currentIndex==1?{background:"white"}:{backgroundColor:"none"})}

        >
        </button>
      </div>
    </div>
  );
};

export default Carousel;