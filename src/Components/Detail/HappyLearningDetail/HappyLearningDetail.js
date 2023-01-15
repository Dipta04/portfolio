import React from 'react';

const HappyLearningDetail = () => {
    return (
        <div className='my-10 lg:grid grid-cols-2 md:grid grid-cols-2'>

            <div>

                <div className="carousel">
                    <div id="item1" className="carousel-item w-full">
                        <figure><img src="https://i.ibb.co/qszSsk5/Screenshot-20221211-014159.png" className="w-full h-full" /></figure>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <figure><img src="https://i.ibb.co/HqrFpd4/Screenshot-20221211-014516.png" className="w-full h-full" /></figure>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <figure><img src="https://i.ibb.co/KsXwZHc/Screenshot-20221211-014355.png" className="w-full h-full" /></figure>
                    </div>
                </div>
                <div className="flex justify-center py-2 gap-2">
                    <a href="#item1" className="btn btn-xs btn-primary">1</a>
                    <a href="#item2" className="btn btn-xs btn-primary">2</a>
                    <a href="#item3" className="btn btn-xs btn-primary">3</a>
                </div>

            </div>

            <div className="card card-compact lg:w-1/2 lg:h-1/2">

                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl text-purple-400">Happy Learning</h2>
                    <p className='font-bold'>
                        • An educational website that offers different kinds of courses with proper details about the course.<br />
                        • This site includes a firebase email-password based and google authentication system.<br />
                        • This site includes a detailed pdf downloader, private route system and detailing Blog route.<br />
                        • This site includes a premium access facility<br />
                        • This site includes a Toggle theme facility (Dark / Light).<br />
                    </p>
                    <div className="card-actions justify-end mt-3">
                        <a href='https://assignment-10-72e7e.web.app/' target='_blank' rel='noreferrer'><button className="btn btn-primary">Live Site</button></a>
                        <a href='https://github.com/Dipta04/assignment-10-client' target='_blank' rel='noreferrer'><button className="btn btn-primary">GitHub Client</button></a>
                        <a href='https://github.com/Dipta04/assignment-10-server' target='_blank' rel='noreferrer'><button className="btn btn-primary">GitHub Server</button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HappyLearningDetail;