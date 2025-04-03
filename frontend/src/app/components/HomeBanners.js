'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function HomeBanners(){
    return(
        <Carousel showThumbs={false} >
        <div>
            <img src="banners/banner1.png" />
            
        </div>
        <div>
            <img src="banners/banner3.png" />
            
        </div>
    </Carousel>
    );
}