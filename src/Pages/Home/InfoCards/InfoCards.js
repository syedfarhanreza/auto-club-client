import React from 'react';
import logo1 from '../../../assets/infocardLogos/free shipping.png'
import logo2 from '../../../assets/infocardLogos/service.png'
import logo3 from '../../../assets/infocardLogos/help-center.png'
import logo4 from '../../../assets/infocardLogos/gift.png'
import InfoCard from './InfoCard';


const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Free Shipping',
            description:'AutoClub offers free home delivery from each of our locations across the US.',
            icon: logo1,
        },
        {
            id: 2,
            name: '5 Free Servicing',
            description:'AutoClub provides 5 services free',
            icon: logo2,
        },
        {
            id: 3,
            name: '14/7 Help Center',
            description:'Technical support experts provide 24/7 supports for all of the services we provide.',
            icon: logo3,
        },
        {
            id: 4,
            name: 'Sure Gift Packs',
            description:'Thank you gifts for clients.',
            icon: logo4,
        },
    ]

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 p-10'>
            {
              cardData.map(card => <InfoCard
                key={card.id}
                card={card}
              ></InfoCard>)  
            }
        </div>
    );
};

export default InfoCards;