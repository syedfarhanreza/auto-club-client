import React from 'react';

const InfoCard = ({card}) => {

    const {name, description, icon} = card;

    return (
        <div className="card w-96 bg-base-100 drop-shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Info" className="rounded-xl w-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;