import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FormattedMessage } from "react-intl";

const NewsPageCom = () => {
    const [news, setNews] = useState(null);
    useEffect(() => {
        const loadPost = async () => {
            try {
                await axios.get("https://api.kspi.uz/v1/yangilik/yangilik/").then(res => {
                    setNews(res.data);
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
            <div className='md:flex md:items-center justify-between'>
                {/* News heading */}
                <div className='flex items-center justify-between my-1 md:my-3'>
                    <h2 className='text-xl md:text-3xl font-bold my-2'><FormattedMessage id='newsHeading' /></h2>
                </div>

                {/* Topics */}
                <div className='flex justify-end'>
                    <select className='select lg:select-lg w-full max-w-xs' name="newsSelect" id="">
                        <option disabled selected value="Topics">Mavzular</option>
                        <option value="All">Hammasi</option>
                        <option value="All">San'at</option>
                        <option value="All">Ta'lim</option>
                        <option value="All">Kampus & Jamiyat</option>
                        <option value="All">Sport</option>
                    </select>
                </div>
            </div>

            {/* News items */}
                <div className='grid md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-6'>
                    {news && news.map((item, idx) => (
                        <div className="p-4 max-w-sm lg:max-w-xs xl:max-w-md mx-auto group/item hover:cursor-pointer" key={idx}>
                            <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md hover:shadow-lg flex-col group/edit">
                                <div className="flex items-center mb-3 relative overflow-hidden">
                                    <img className="w-full rounded group-hover/item:scale-105 ease-in duration-300 ..." src={item.rasm} alt="Sunset in the mountains" />
                                    <div className='absolute top-0 left-3 h-12 w-12 bg-[#802323] text-center flex flex-col text-sm p-1'>
                                        <span className='text-white'>20.12</span>
                                        <span className='text-white'>2023</span>
                                    </div>
                                    <div className='absolute bottom-0 border-[#004269] border-2 w-10 group-hover/edit:w-full ... ease-in duration-300 ...'></div>
                                </div>
                                {/* News topics */}
                                <div className='text-center'>
                                    <p className='text-[#802323] font-medium text-xs md:text-sm'>SPORT</p>
                                </div>
                                {/* News title */}
                                <div className="flex flex-col justify-between flex-grow px-2">
                                    <h2 className="leading-relaxed font-bold line-clamp-3 xl:line-clamp-2 text-base text-[#004269] text-center dark:text-gray-300 line">
                                        {item.title}
                                    </h2>
                                    <div className='flex justify-center items-center'>
                                        <div className='border-4 bg-[#004269] w-10 my-5'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default NewsPageCom;


