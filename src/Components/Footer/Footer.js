import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About me</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Email</a>
                    <a className="link link-hover">Phone</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://github.com/Dipta04' target='_blank' rel='noreferrer'><p className='text-3xl btn btn-circle text-purple-400'><FaGithub></FaGithub></p></a>
                        <a href='https://www.linkedin.com/in/dipta-karmakar-a65480259/' target='_blank' rel='noreferrer'><p className='text-3xl btn btn-circle text-purple-400'><FaLinkedinIn></FaLinkedinIn></p></a>
                        <a href='https://www.facebook.com/dru.ve.1/' target='_blank' rel='noreferrer'><p className='text-3xl btn btn-circle text-purple-400'><FaFacebook></FaFacebook></p></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by Dipta Karmakar</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;