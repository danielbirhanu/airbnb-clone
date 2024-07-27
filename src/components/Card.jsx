import React from 'react';
import star from '../assets/star.jfif';

export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt='image 1' className="card-image" />
            <div className="card-stats">
                <img src={star} alt='star rating' className='card-star'/>
                <span>{props.rating}</span>
                <span className='gray'>`(${props.reviewCount}) • `</span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>)
}

