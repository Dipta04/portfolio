import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const About = () => {
    return (
        <div className='lg:flex justify-center'>
            <div>
                <img src="https://i.ibb.co/RPqW27r/Linkedin-1-removebg-preview.png" alt="" className='sm:mx-auto mb-3 md:mx-auto mb-3'/>
            </div>
            <div className='my-auto'>
                <h1 className='text-4xl font-bold mb-4 text-purple-500'>About Me</h1>
                <p>Creative problem solver with demonstrated ability to work on multiple projects simultaneously.Positive driven and confident individual with an apt for learning new technology.</p>
                <p className='font-bold mt-2'>Fluent in JavaScript, React JS, Node JS, Express JS, MongoDB.</p> 
                <div className='flex justify-center gap-3 mt-3'>
                <a href='https://github.com/Dipta04' target='_blank' rel='noreferrer'><p className='text-3xl btn btn-circle text-purple-400'><FaGithub></FaGithub></p></a>
                <a href='https://www.linkedin.com/in/dipta-karmakar-a65480259/' target='_blank' rel='noreferrer'><p className='text-3xl btn btn-circle text-purple-400'><FaLinkedinIn></FaLinkedinIn></p></a>
                <a href='https://www.facebook.com/dru.ve.1/' target='_blank' rel='noreferrer'><p className='text-3xl btn btn-circle text-purple-400'><FaFacebook></FaFacebook></p></a>
                </div>
            </div>
        </div>
    );
};

export default About;