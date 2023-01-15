import React from 'react';

const CloudKitchenDetail = () => {
    return (
        <div className='my-10 lg:grid grid-cols-2 md:grid grid-cols-2'>

            <div>

                <div className="carousel">
                    <div id="item1" className="carousel-item w-full">
                        <figure><img src="https://i.ibb.co/DVfScG1/Screenshot-20221211-013214.png" className="w-full h-full" /></figure>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <figure><img src="https://i.ibb.co/MgFGTYm/Screenshot-20221211-013248.png" className="w-full h-full" /></figure>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <figure><img src="https://i.ibb.co/z7t69Xg/Screenshot-20221211-013423.png" className="w-full h-full" /></figure>
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
                    <h2 className="card-title font-bold text-2xl text-purple-400">Cloud Kitchen</h2>
                    <p className='font-bold'>
                        • This site includes a firebase email-password based and google authentication system.<br />
                        • User can maintain their products. User can store their product information in the database.<br />
                        • User can update stocks and also can add his own product to the list.<br />
                        • User can see the reviews of the different products.<br />
                        • User can can see the proper detail section of the product<br />
                    </p>
                    <div className="card-actions justify-end mt-3">
                        <a href='https://assignment-11-b2948.web.app/' target='_blank' rel='noreferrer'><button className="btn btn-primary">Live Site</button></a>
                        <a href='https://github.com/Dipta04/cloud-kitchen-client-11' target='_blank' rel='noreferrer'><button className="btn btn-primary">GitHub Client</button></a>
                        <a href='https://github.com/Dipta04/cloud-kitchen-server-11' target='_blank' rel='noreferrer'><button className="btn btn-primary">GitHub Server</button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CloudKitchenDetail;