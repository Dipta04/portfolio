import React from 'react';

const Mskill = ({ service }) => {
    const { img } = service;
    return (
        <div>
            <div className="avatar">
                <div className="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div>
        </div>
    );
};

export default Mskill;