// NewsCard.js fayli
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsCard = () => {
    const { id } = useParams();
    const [newsData, setNewsData] = useState({});

    useEffect(() => {
        // API dan tanlangan yangilik ma'lumotlarini olish
        fetch(`https://api.kspi.uz/v1/yangilik/yangilik/${id}`)
            .then(response => response.json())
            .then(data => setNewsData(data))
            .catch(error => console.error('Xatolik: ', error));
    }, [id]);

    return (
        <div>
            <img src={newsData.rasm} alt="" />
            <h2>{newsData.title}</h2>
            <p>{newsData.body}</p>
        </div> 
    );
};

export default NewsCard;
