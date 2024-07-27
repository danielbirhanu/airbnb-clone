import React from 'react';
import img from '../assets/image.jfif';

export default function Hero(){
    return (
        <section className='hero'>
            <img src={img} alt="image" className='hero-photo'/>
            <section className="hero-content">
                <h1 className='hero-header'>Online Experiences</h1>
                <p className='hero-text'>Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home. </p>
            </section>
            <br />
            <hr />
        </section>
    )
}