import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='flex justify-center mb-8'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/RPqW27r/Linkedin-1-removebg-preview.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center font-bold text-3xl">Dipta Karmakar</h2>
                    <h2 className='font-bold'>Front-End-Developer</h2>
                    <p className='font-bold'>Email: diptakarmakar38@gmail.com</p>
                    <p className='font-bold'>Phone: +880 1775852015</p>
                    <div className='flex justify-center gap-3 mt-3'>
                        <a href='https://github.com/Dipta04' target='_blank' rel='noreferrer'><p className='text-3xl btn btn-circle text-purple-400'><FaGithub></FaGithub></p></a>
                        <a href='https://www.linkedin.com/in/dipta-karmakar-a65480259/' target='_blank' rel='noreferrer'><p className='text-3xl btn btn-circle text-purple-400'><FaLinkedinIn></FaLinkedinIn></p></a>
                        <a href='https://www.facebook.com/dru.ve.1/' target='_blank' rel='noreferrer'><p className='text-3xl btn btn-circle text-purple-400'><FaFacebook></FaFacebook></p></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;