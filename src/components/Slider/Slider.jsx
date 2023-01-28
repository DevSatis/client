import React from 'react';
import './Slider.scss'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { useState } from 'react';

const Slider = () => {

    const[currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80",
        "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        "https://images.unsplash.com/photo-1619102814948-e164e584cf0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ];
    const prevSlide = ()=>{
        setCurrentSlide(currentSlide === 0 ? 2:(prev) => prev - 1);
    };
    const nextSlide = ()=>{
        setCurrentSlide(currentSlide === 2 ? 0:(next) => next + 1);
    };
  return (
    <div className='slider'>
        <div className='container' style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt=''/>
            <img src={data[1]} alt=''/>
            <img src={data[2]} alt=''/>
        </div>
        <div className='icons'>
            <div className='icon' onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className='icon' onClick={nextSlide}>
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider