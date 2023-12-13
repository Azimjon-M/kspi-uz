import React from 'react';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import Interactive from '../../components/Interactive';
import News from '../../components/News';

function Main() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Interactive />
            <News />
        </div>
    )
}

export default Main;