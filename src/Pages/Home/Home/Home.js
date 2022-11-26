import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Feedback from '../Feedback/Feedback';
import InfoCards from '../InfoCards/InfoCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <InfoCards></InfoCards>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;