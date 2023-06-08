import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./slider.css"



export default function Slider() {
  return (
    <div className="slider_container">
        <MDBCarousel showControls dealy={3000}>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src='https://feerie.tn/media/amasty/bannerslider/My_project-1_-_2023-01-23T120053.100.png'
            alt='...'
          />
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src='https://feerie.tn/media/amasty/bannerslider/My_project-1_3_.png'
            alt='...'
          />
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src='https://feerie.tn/media/amasty/bannerslider/CH_GLAM.jpg'
            alt='...'
          />
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={4}
            src='https://feerie.tn/media/amasty/bannerslider/My_project-1_1.jpg'
            alt='...'
          />
         
        </MDBCarousel>
    </div>
  );
}