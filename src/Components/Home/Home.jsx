import { useLoaderData } from 'react-router-dom';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper";
import './Home.css'
import Chef from '../Chef/Chef';
import ExtraSection from '../ExtraSection/ExtraSection';
const Home = () => {
    const {carouselData,chefs}=useLoaderData()
    return (
        <div>
             <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {carouselData.map(data=>
         <SwiperSlide
         key={data.id}
         >
            <div style={{backgroundImage:`url(${data.img})`}} className='bg'>
            <div className='w-[80%] mx-auto text-center pt-36 space-y-5'>
            <h1 className='text-5xl lg:text-7xl text-white font-serif'>{data.title}</h1>
                <p className='text-white text-lg'>{data.text}</p>
            </div>
            </div>
         </SwiperSlide>
            )}
       
        
      </Swiper>
    </>

   <div className='py-16 w-[80%] mx-auto'>
   <h1 className='text-5xl text-yellow-700 text-center font-serif'>Ours Chefs</h1>
   <p className='text-4xl mt-5 text-center font-serif'>Our All Chefs Are High Skilled And Experienced</p>
   <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 '>
     {chefs.map(chef=><Chef
     key={chef.id}
     chef={chef}
     ></Chef>)}
    </div>
   </div>
   <div>
   </div>
    <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;