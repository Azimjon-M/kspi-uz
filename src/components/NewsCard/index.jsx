// NewsCard.js fayli
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsCard = () => {
    const { id } = useParams();
    const [newsData, setNewsData] = useState({});

    useEffect(() => {
        // API dan tanlangan yangilik ma'lumotlarini olish
        fetch(`https://api.example.com/news/${id}`)
            .then(response => response.json())
            .then(data => setNewsData(data))
            .catch(error => console.error('Xatolik: ', error));
    }, [id]);

    return (
        <div>
            <h2>{newsData.title}</h2>
            <p>{newsData.content}</p>
            {/* Boshqa yangilik ma'lumotlari */}
        </div>
    );
};

export default NewsCard;
