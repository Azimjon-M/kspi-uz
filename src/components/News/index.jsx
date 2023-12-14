import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FormattedMessage } from "react-intl";

import { FaLongArrowAltRight } from "react-icons/fa";

const News = () => {
    const [firstNews, setFirstNews] = useState(null);
    const [news, setNews] = useState(null);
    useEffect(() => {
        const loadPost = async () => {
            try {
                await axios.get("https://api.kspi.uz/v1/yangilik/yangilik/").then(res => {
                    setFirstNews(res.data.slice(0, 1))
                    setNews(res.data.slice(1, 5));
                }).catch(err => {
                    console.log(err);
                });
            } catch (error) {
                console.log(error);
            }
        }
        loadPost();
    }, []);
    return (
        <div className='px-5 py-3 md:px-10 lg:px-20'>
            <div className='flex items-center justify-between my-1 md:my-3'>
                <h2 className='text-xl md:text-3xl font-bold my-2'><FormattedMessage id='newsHeading' /></h2>
            </div>

            <div className="grid md:grid-cols-1 xl:grid-cols-2">
                {firstNews && firstNews.map((item, idx) => (
                    <div className="p-4 max-w-sm md:max-w-3xl lg:max-w-4xl mx-auto" key={idx}>
                        <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md hover:shadow-lg flex-col ">
                            <div className="flex items-center mb-3">
                                <img className="w-full rounded" src={item.rasm} alt="Sunset in the mountains" />
                            </div>
                            <div className="flex flex-col justify-between flex-grow px-2">
                                <h2 className="leading-relaxed line-clamp-3 xl:line-clamp-5 text-base dark:text-gray-300">
                                    {item.title}
                                </h2>
                                <button className="my-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
                                    <FormattedMessage id='newsBatafsil' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2'>
                    {news && news.map((item, idx) => (
                        <div className="p-4 max-w-sm lg:max-w-xs mx-auto" key={idx}>
                            <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md hover:shadow-lg flex-col ">
                                <div className="flex items-center mb-3">
                                    <img className="w-full rounded" src={item.rasm} alt="Sunset in the mountains" />
                                </div>
                                <div className="flex flex-col justify-between flex-grow px-2">
                                    <h2 className="leading-relaxed line-clamp-3 xl:line-clamp-2 text-base dark:text-gray-300 line">
                                        {item.title}
                                    </h2>
                                    <button className="my-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
                                        <FormattedMessage id='newsBatafsil' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-end my-2'>
                <button className='flex items-center  md:text-xl'><FormattedMessage id='newsToPage' /> <FaLongArrowAltRight /></button>
            </div>
        </div>
    )
}

export default News;


