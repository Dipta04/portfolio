import React from 'react';
import Mskill from './Mskill';



const Myskill = () => {

    const skillData=[
        {
            id:1,
            img:'https://i.ibb.co/ySbq44P/js.png'
        },
        {
            id:2,
            img:'https://i.ibb.co/gFTN5st/css-3.png'
        },
        {
            id:3,
            img:'https://i.ibb.co/7VjjkGC/html-5.png'
        },
        {
            id:4,
            img:'https://i.ibb.co/pfmDJ7W/physics.png'
        },
        {
            id:5,
            img:'https://i.ibb.co/YfjdWcL/nodejs.png'
        },
        {
            id:6,
            img:'https://i.ibb.co/6cQhdYg/mongo-removebg-preview.png'
        },
        {
            id:7,
            img:'https://i.ibb.co/6m2LDbX/Firebase-removebg-preview.png'
        }

    ]

    return (
        <div>
            <h1 className='text-5xl text-purple-500 font-bold my-10'>My Skills</h1>
            <div className='grid gap-8 grid-cols-3 md:grid-cols-3 lg:grid-cols-5'>
              {
                skillData.map(service=><Mskill
                key={service.id}
                service={service}
                ></Mskill>)
              }
              </div>
        </div>
    );
};

export default Myskill;