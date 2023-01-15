import React from 'react';

const CarResaleDetail = () => {
    return (
        <div className='my-10 lg:grid grid-cols-2 md:grid grid-cols-2'>

            <div>

            <div className="carousel">
                <div id="item1" className="carousel-item w-full">
                    <figure><img src="https://i.ibb.co/tq6fPtR/Screenshot-20221211-121547.png" className="w-full h-full" /></figure>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <figure><img src="https://i.ibb.co/xJDBhns/Screenshot-20221211-121637.png" className="w-full h-full" /></figure>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <figure><img src="https://i.ibb.co/yYgnf6K/Screenshot-20221211-121858.png" className="w-full h-full" /></figure>
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
                    <h2 className="card-title font-bold text-2xl text-purple-400">Car Resale</h2>
                    <p className='font-bold'>
                        • This site includes a firebase email-password based and google authentication system.<br />
                        • This site has different features for different roles.There are three roles admin, seller and buyer.<br />
                        • This site includes a stripe payment system and order products facility.<br />
                        • Seller can add his own product and Advertise the product in the website.<br />
                        • Admin can see all the Buyers and the sellers.
                    </p>
                    <div className="card-actions justify-end mt-3">
                    <a href='https://assignment-12-145c3.web.app/' target='_blank' rel='noreferrer'> <button className="btn btn-primary">Live Site</button></a>
                    <a href='https://github.com/Dipta04/car-resale-client-12' target='_blank' rel='noreferrer'> <button className="btn btn-primary">GitHub Client</button></a>
                    <a href='https://github.com/Dipta04/car-resale-server-12' target='_blank' rel='noreferrer'>   <button className="btn btn-primary">GitHub Server</button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarResaleDetail;