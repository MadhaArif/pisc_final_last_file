import React, { useState, useEffect } from 'react';
import { Footer, HeaderTwo } from '../../../layout';
import CounterArea from './counter-area';
import AboutArea from './about-area';
import CategoryArea from './category-area';
import CoursesArea from './courses-area';
import HeroSlider from './hero-slider';
import TestimonialArea from './testimonial-area';
import AdBanner from './ad-banner';
import BrandArea from './brand-area';

const HomeUniversity = () => {
  const [data, setData] = useState([]);
  const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
  const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
  const RANGE = "other";

  // get data from google excel sheet
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        const result = await response.json();
        result?.values?.shift()
        setData(result?.values?.splice(0, 3));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <HeaderTwo no_topBar />
        <HeroSlider />
        <CategoryArea />
        <AboutArea img={data.length && data[0][4]} img2={data.length && data[0][5]} />
        <CounterArea home_3={true} />
        <CoursesArea />

        {data.length && data[0][3] && <div className='d-none d-md-block'
          style={{
            width: '100%',
            height: '500px',
            backgroundImage: data.length && `url(/assets/images/course/${data[0][3]})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />}

        <TestimonialArea />
        <AdBanner />
        <BrandArea />
        <Footer />
      </div>
    </div>
  );
};

export default HomeUniversity;
