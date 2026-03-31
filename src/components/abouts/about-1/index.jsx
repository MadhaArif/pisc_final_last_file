import { useState, useEffect } from "react";
import { Footer, HeaderTwo } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb-3';
import Testimonial from '../../homes/home-university/testimonial-area';
import AboutArea from './about-area';
import BrandArea from './brand-area';
import Team from '../../teams/team-1/team-area';

const AboutPage = () => {
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
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo no_top_bar={true} />
                <Breadcrumb title="About Us" />
                <AboutArea imgage={data.length && data[0][6]}/>
                <Testimonial/>
                <Team />
                <Footer />
            </div>
        </div>
    )
}

export default AboutPage;