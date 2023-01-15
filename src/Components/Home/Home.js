import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Email from '../Email/Email';
import Header from '../Header/Header';
import Myskill from '../Myskill/Myskill';
import Project from '../Projects/Project';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Myskill></Myskill>
            <Project></Project>
            <Email></Email>
        </div>
    );
};

export default Home;