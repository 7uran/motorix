


export const sliderItems = [
    {
        id: 1,
        img: "https://motorix.themerex.net/wp-content/uploads/2024/01/210_2-1-copyright.jpg",
        title: "Slider 1",
        desc: (
            <div className='p-12 flex justify-between'>
                <div className='w-[520px] flex flex-col gap-6'>
                    <h2 className="text-[17px] font-bold">QUALITY PRODUCTS</h2>
                    <p className='text-[63px] font-semibold leading-[65px]'>Quality branded tires and wheels</p>
                    <button
                        onClick={() => {
                            const offersSection = document.getElementById('offers');
                            if (offersSection) {
                                window.scrollTo({ top: offersSection.offsetTop, behavior: 'smooth' });
                            }
                        }}
                        className='uppercase text-[17px] hover:bg-[#ee5600] transition duration-300 bg-main w-[209px] h-[59px] font-semibold'>
                        see offers
                    </button>
                </div>
                <div className='flex items-end font-bold gap-2'>
                    <div className='flex items-end gap-2 px-10'>
                        <span className='text-[53px] translate-y-[7px]'>01</span>
                        <span className='text-[30px]'>/</span>
                        <span className='text-[30px]'>03</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        img: "https://motorix.themerex.net/wp-content/uploads/2024/01/210_2-2-copyright.jpg",
        title: "Slider 2",
        desc: (
            <div className='p-12 flex justify-between'>
                <div className='w-[520px] flex flex-col gap-6'>
                    <h2 className="text-[17px] font-bold">QUALITY PRODUCTS</h2>
                    <p className='text-[63px] font-semibold leading-[65px]'>Precision treads, impeccable ridesyy</p>
                    <button
                        onClick={() => {
                            const offersSection = document.getElementById('offers');
                            if (offersSection) {
                                window.scrollTo({ top: offersSection.offsetTop, behavior: 'smooth' });
                            }
                        }}
                        className='uppercase hover:bg-[#ee5600] transition duration-300 text-[17px] bg-main w-[209px] h-[59px] font-semibold'>
                        see offers
                    </button>
                </div>
                <div className='flex items-end font-bold gap-2'>
                    <div className='flex items-end gap-2 px-10'>
                        <span className='text-[53px] translate-y-[7px]'>02</span>
                        <span className='text-[30px]'>/</span>
                        <span className='text-[30px]'>03</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 3,
        img: "https://motorix.themerex.net/wp-content/uploads/2024/01/210_2-3-copyright.jpg",
        title: "Slider 3",
        desc: (
            <div className='p-12 flex justify-between'>
                <div className='w-[520px] flex flex-col gap-6'>
                    <h2 className="text-[17px] font-bold">QUALITY PRODUCTS</h2>
                    <p className='text-[63px] font-semibold leading-[65px]'>Tires that roar, wheels that soar</p>
                    <button
                        onClick={() => {
                            const offersSection = document.getElementById('offers');
                            if (offersSection) {
                                window.scrollTo({ top: offersSection.offsetTop, behavior: 'smooth' });
                            }
                        }}
                        className='uppercase hover:bg-[#ee5600] transition duration-300 text-[17px] bg-main w-[209px] h-[59px] font-semibold'>
                        see offers
                    </button>
                </div>
                <div className='flex items-end font-bold gap-2'>
                    <div className='flex items-end gap-2 px-10'>
                        <span className='text-[53px] translate-y-[7px]'>03</span>
                        <span className='text-[30px]'>/</span>
                        <span className='text-[30px]'>03</span>
                    </div>
                </div>
            </div>
        ),
    },
];


export const WidgetCardImages = [
    "https://motorix.themerex.net/wp-content/uploads/2024/01/client-1-copyright.png",
    "https://motorix.themerex.net/wp-content/uploads/2024/01/client-2-copyright.png",
    "https://motorix.themerex.net/wp-content/uploads/2024/01/client-3-copyright.png",
    "https://motorix.themerex.net/wp-content/uploads/2024/01/client-4-copyright.png",
    "https://motorix.themerex.net/wp-content/uploads/2024/01/client-5-copyright.png",
    "https://motorix.themerex.net/wp-content/uploads/2024/01/client-6-copyright.png",
];


