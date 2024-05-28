import React from 'react';
import './App.css';
import boisko from '../images/boisko.jpg';
import alig from '../images/alig.jpg';
import szkola from '../images/szkola.jpg';

function Carousel() {
    return (
        <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={alig} className="d-block w-100 carousel-image" alt="Geralt" />
                </div>
                <div className="carousel-item">
                    <img src={szkola} className="d-block w-100 carousel-image" alt="Geralt2" />
                </div>
                <div className="carousel-item">
                    <img src={boisko} className="d-block w-100 carousel-image" alt="Geraltzeb" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
export default Carousel;