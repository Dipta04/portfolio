import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {

    const handleType = (count) => {
        console.log(count);
    }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (

        <div className="hero mt-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/stYxhKq/Coding-2-removebg-preview.png" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 className="text-5xl font-bold">Hi There!</h1>
                    <p className="py-2 text-5xl font-bold">I'm Dipta Karmakar</p>
                    <h1 style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        {' '}
                        <span style={{ color: '#A500FF', fontWeight: 'bold', fontSize: "48px" }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Front End Developer', 'MERN Developer']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h1>
                    <a href='https://drive.google.com/file/d/1wgezZqu6Vs23OW7GgGvbwC8IjrKDlp-P/view?usp=share_link' target='_blank' rel='noreferrer'><button className="btn btn-primary mt-3">Download CV</button></a>
                </div>
            </div>
        </div>


    );
};

export default Banner;