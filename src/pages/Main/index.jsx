import React from 'react';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import Interactive from '../../components/Interactive';
import NewsHome from '../../components/NewsHomeCom';

function Main() {
    return (
        <div>
            {/* <Navbar /> */}
            <Carousel />
            <Interactive />
            <NewsHome />
        </div>
    )
}

export default Main;