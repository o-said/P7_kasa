import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/carroussel.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function Carroussel({ appartment }) {
    const [current, setCurrent] = useState(0);
    const length = appartment ? appartment.pictures.length : 0;

    const nextSlide = () => {
        setCurrent((current + 1) % length);
    };
    const prevSlide = () => {
        setCurrent((current - 1 + length) % length);
    };
    return (
        <section className="slider">
            <p className='slide__count'>{current + 1} / {length}</p> 
            {length > 1 && (
                <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
            )}
            {length > 1 && (
                <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
            )}             
            <div className="slide active">                  
                <Link to={`/appartmentDetail/${appartment.id}`}>
                    <img src={appartment.pictures[current]} alt={appartment.name} className="image__slide" />  
                </Link>
            </div>
        </section>
    );
}
export default Carroussel;

