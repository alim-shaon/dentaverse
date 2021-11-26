import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container className="p-4">
                <h1 className="pt-5">Welcome To <span className="custom-color">Dentaverse</span></h1>
                <h4>Where we protect your beautiful Smile. <br /> Feel great and be happy with your Smile </h4>
                <NavLink to="/appointment">  <button className="custom-button mt-5">Book-Now</button></NavLink>
            </Container>
        </div>
    );
};

export default Banner;