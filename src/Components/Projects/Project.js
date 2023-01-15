import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
    return (

        <div>
        <h1 className='text-5xl font-bold my-6 text-purple-500'>My Projects</h1>

        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-10'>

            <div className="card bg-base-100 shadow-xl mx-auto mb-2">
                <figure><img src="https://i.ibb.co/QXjDHDv/Banner2-removebg-preview.png" alt="car" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-purple-400">Car Resale</h2>
                    <p>
                        • This site includes a firebase email-password based and google authentication system.<br />
                        • This site has different features for different roles. There are three roles admin, seller and buyer.<br />
                        • This site includes a stripe payment system and order products facility.
                    </p>
                    <div className="card-actions justify-end">
                      <Link to='/carresaledetail'><button className="btn btn-primary">Detail</button></Link>  
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl mx-auto mb-2">
                <figure><img src="https://i.ibb.co/6cMPkDn/chef.png" alt="car" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-purple-400">Cloud Kitchen</h2>
                    <p>
                        • This site includes a firebase email-password based and google authentication system.<br />
                        • User can maintain their products. User can store their product information in the database.<br />
                        • User can update stocks and also can add his own product to the list.
                    </p>
                    <div className="card-actions justify-end">
                    <Link to='/cloudkitchendetail'><button className="btn btn-primary">Detail</button></Link>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl mx-auto mb-2">
                <figure><img src="https://i.ibb.co/vHwPhqs/Education-removebg-preview.png" alt="car" className='lg:h-96' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-purple-400">Happy Learning</h2>
                    <p>
                        • An educational website that offers different kinds of courses with proper details about the course.<br />
                        • This site includes a firebase email-password based and google authentication system.<br />
                        • This site includes a detailed pdf downloader, private route system and detailing Blog route.
                    </p>
                    <div className="card-actions justify-end">
                    <Link to='/happylearningdetail'><button className="btn btn-primary">Detail</button></Link>
                    </div>
                </div>
            </div>


        </div>

        </div>
    );
};

export default Project;