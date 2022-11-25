import React from 'react';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import InfoCards from '../InfoCards/InfoCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;