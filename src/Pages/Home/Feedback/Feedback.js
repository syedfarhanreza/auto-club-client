import React from 'react';
import bg from '../../../assets/feedback/feedback-bg.jpg'
const Feedback = () => {
    return (
       <div className='mt-10'>
            <h1 className='text-5xl font-bold text-center'>Clients Feedback</h1>
         <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bg} alt="Background" className="w-full" />
                <div className="absolute flex justify-evenly transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>

                    <div className='text-center items-center w-1/2 mx-auto'>
                        <p className='font-semibold'>We had such a great experience with Excellence AuTo Direct! Everyone there made us feel so comfortable. JOHNNY especially! It was THE best experience we have ever had in buying a car!! My experience was great at this dealership. Thank you Johnny for all your help. #bettercalljohnny</p>
                        <h1 className='text-3xl font-bold mt-5'>-----Kirsten Dietz</h1>
                    </div>

                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={bg} alt="Background" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>

                    <div className='text-center items-center w-1/2 mx-auto'>
                        <p className='font-semibold'>I had an absolutely amazing experience working with Excellence Auto! Honestly, the best dealership I’ve ever worked with. They are all very professional, extremely helpful and just pleasant all around. I worked mostly with Austin, Matt, and Tamara- and I couldn’t say enough kind things. Oh, and I love the car!</p>
                        <h1 className='text-3xl font-bold mt-5'>-----Kasandra Mancillas</h1>
                    </div>

                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bg} alt="Background" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <div className='text-center items-center w-1/2 mx-auto'>
                        <p className='font-semibold'>Spent the last two months searching for a vehicle and narrowed it down to two that were conveniently located at Excellence. Austin was consistent with his communication and was a great help throughout the entire buying process. Will come back in the future!</p>
                        <h1 className='text-3xl font-bold mt-5'>-----Bryan Artea</h1>
                    </div>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={bg} alt="Background" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>

                    <div className='text-center items-center w-1/2 mx-auto'>
                        <p className='font-semibold'>Fantastic Experience at dealership. I went to checkout some used cars from their inventory and Leo helped me decide what is the best fit for me since I was first time car buyer. I would definitely recommend to at-least visit dealership specially if you are new buyer. You'll experience amazing service and transparency in the process.</p>
                        <h1 className='text-3xl font-bold mt-5'>-----Black Kitty Cat</h1>
                    </div>

                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Feedback;