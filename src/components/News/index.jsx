import React from 'react'
import img from '../../assets/images/kspi-img1.jpg'

const News = () => {
    return (
        <div className='px-5 py-3 md:px-10 lg:px-20'>
            <div className='flex items-center justify-between my-1 md:my-3'>
                <h2 className='text-xl md:text-3xl font-bold my-2'>Yangiliklar</h2>
                <button className='flex items-center md:text-xl'>Barcha yangiliklar <svg className='ml-1' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                <div className="p-4 max-w-sm mx-auto">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                        <div className="flex items-center mb-3">
                        <img className="w-full rounded" src={img} alt="Sunset in the mountains" />
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed line-clamp-3 text-base text-white dark:text-gray-300">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                            </p>
                            <button className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Batafsil
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-4 max-w-sm mx-auto">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                        <div className="flex items-center mb-3">
                        <img className="w-full rounded" src={img} alt="Sunset in the mountains" />
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed line-clamp-3 text-base text-white dark:text-gray-300">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                            </p>
                            <button className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Batafsil
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-4 max-w-sm mx-auto">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                        <div className="flex items-center mb-3">
                        <img className="w-full rounded" src={img} alt="Sunset in the mountains" />
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed line-clamp-3 text-base text-white dark:text-gray-300">
                                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
                            </p>
                            <button className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Batafsil
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-4 max-w-sm mx-auto">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                        <div className="flex items-center mb-3">
                        <img className="w-full rounded" src={img} alt="Sunset in the mountains" />
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed line-clamp-3 text-base text-white dark:text-gray-300">
                                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
                            </p>
                            <button className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Batafsil
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default News;


