import React from 'react'

const News = () => {
    return (
        <div className='px-8 m-10'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold my-2'>Yangiliklar</h2>
                <button className='flex items-center'>Barcha yangiliklar <svg className='ml-1' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></button>
            </div>
            <div className='flex flex-wrap'>
                {/* items */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <h2 class="font-bold text-xl mb-2">The Coldest Sunset</h2>
                    </div>
                    <div class="px-6 pt-4 pb-2 flex justify-between items-center">
                        <div class="inline-block mr-2 mb-2">12.12.2023</div>
                        <button className='btn bg-[#004269] text-white hover:border-[#004269] hover:text-[#004269] hover:bg-[#fff]'>Batafsil</button>
                    </div>
                </div>

                {/* items */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <h2 class="font-bold text-xl mb-2">The Coldest Sunset</h2>
                    </div>
                    <div class="px-6 pt-4 pb-2 flex justify-between items-center">
                        <div class="inline-block mr-2 mb-2">12.12.2023</div>
                        <button className='btn bg-[#004269] text-white hover:border-[#004269] hover:text-[#004269] hover:bg-[#fff]'>Batafsil</button>
                    </div>
                </div>

                {/* items */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <h2 class="font-bold text-xl mb-2">The Coldest Sunset</h2>
                    </div>
                    <div class="px-6 pt-4 pb-2 flex justify-between items-center">
                        <div class="inline-block mr-2 mb-2">12.12.2023</div>
                        <button className='btn bg-[#004269] text-white hover:border-[#004269] hover:text-[#004269] hover:bg-[#fff]'>Batafsil</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;


