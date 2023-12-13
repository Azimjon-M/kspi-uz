import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import img from '../../assets/images/kspi-img1.jpg'

const News = () => {
    return (
        <div className='px-5 py-3 md:px-10 lg:px-20'>
            <div className='flex items-center justify-between my-1 md:my-3'>
                <h2 className='text-xl md:text-3xl font-bold my-2'>Yangiliklar</h2>
                <button className='flex items-center md:text-xl'>Barcha yangiliklar <FaLongArrowAltRight /></button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                <div className="p-4 max-w-sm mx-auto">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <img className="w-full rounded" src={img} alt="Sunset in the mountains" />
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed line-clamp-3 text-base dark:text-gray-300">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                            </p>
                            <button className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
                                Batafsil
                                <FaLongArrowAltRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-4 max-w-sm mx-auto">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <img className="w-full rounded" src={img} alt="Sunset in the mountains" />
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed line-clamp-3 text-base dark:text-gray-300">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                            </p>
                            <button className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Batafsil</button>
                        </div>
                    </div>
                </div>

                <div className="p-4 max-w-sm mx-auto">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <img className="w-full rounded" src={img} alt="Sunset in the mountains" />
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed line-clamp-3 text-base dark:text-gray-300">
                                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
                            </p>
                            <button className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Batafsil</button>
                        </div>
                    </div>
                </div>

                <div className="p-4 max-w-sm mx-auto">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <img className="w-full rounded" src={img} alt="Sunset in the mountains" />
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed line-clamp-3 text-base dark:text-gray-300">
                                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
                            </p>
                            <button className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Batafsil</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default News;


