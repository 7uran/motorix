


export const sliderItems = [
    {
        id: 1,
        img: "https://motorix.themerex.net/wp-content/uploads/2024/01/210_2-1-copyright.jpg",
        title: "Slider 1",
        desc: (
            <div className='md:p-12 flex justify-between'>
                <div className='w-[520px] flex flex-col gap-6'>
                    <h2 className="text-[17px] font-medium tracking-widest">QUALITY PRODUCTS</h2>
                    <p className='md:text-[63px] text-[32px] font-medium md:leading-[65px]'>Quality branded tires and wheels</p>
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
                <div className='flex items-end font-medium gap-2'>
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
            <div className='md:p-12 flex justify-between'>
                <div className='w-[520px] flex flex-col gap-6'>
                    <h2 className="text-[17px] font-medium tracking-widest	">QUALITY PRODUCTS</h2>
                    <p className='md:text-[63px] text-[32px] font-medium md:leading-[65px]'>Precision treads, impeccable rides</p>
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
                <div className='flex items-end font-medium gap-2'>
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
            <div className='md:p-12 flex justify-between'>
                <div className='w-[520px] flex flex-col gap-6'>
                    <h2 className="text-[17px] font-medium tracking-widest	">QUALITY PRODUCTS</h2>
                    <p className='md:text-[63px] text-[32px] font-medium md:leading-[65px]'>Tires that roar, wheels that soar</p>
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
                <div className='flex items-end font-medium gap-2'>
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

export const commentCardData = [
    {
        name: "Andrew Morris",
        location: "Billings, MT",
        img: "https://motorix.themerex.net/wp-content/uploads/2024/01/testi-1-copyright-120x120.jpg",
    },
    {
        name: "Nick Jones",
        location: "New York City, NY",
        img: "https://motorix.themerex.net/wp-content/uploads/2024/01/testi-2-copyright-120x120.jpg",
    },
    {
        name: "Brian Woods",
        location: "Dallas, TX",
        img: "https://motorix.themerex.net/wp-content/uploads/2024/01/testi-3-copyright-120x120.jpg",
    },

];


export const commentsData = [
    {
        name: 'Andrew Morris',
        location: 'Billings, MT',
        img: 'https://motorix.themerex.net/wp-content/uploads/2024/01/testi-1-copyright-120x120.jpg',
        comments: [
            "Top-notch professionals! They provided knowledgeable advice on the best tires for safety and efficiency, and the wheel installation was quick and flawless.",
            "Quality tires, and fantastic service. The new rims add such flair. My car’s performance is top-notch now. I’m beyond impressed! "
        ]
    },
    {
        name: 'Nick Jones',
        location: 'New York City, NY',
        img: 'https://motorix.themerex.net/wp-content/uploads/2024/01/testi-2-copyright-120x120.jpg',
        comments: [
            "Quality tires, and fantastic service. The new rims add such flair. My car’s performance is top-notch now.",
            "Great prices, expert fitting. My car has never looked better or driven smoother. Thanks! Truly satisfied with the purchase."
        ]
    },
    {
        name: 'Brian Woods',
        location: 'Dallas, TX',
        img: 'https://motorix.themerex.net/wp-content/uploads/2024/01/testi-3-copyright-120x120.jpg',
        comments: [
            "Exceptional service and top-quality products. My car handles better than ever with the new tires.",
            "Superb selection! New wheels and tires made my ride smooth and stylish. New tires, smooth ride. Best decision I’ve made for my car. Totally satisfied customer. "
        ]
    }
];



export const footerSocial = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/ThemeRexStudio',
    },
    {
        name: 'Twitter',
        link: 'https://x.com/ThemerexThemes',
    },
    {
        name: 'Dribble',
        link: 'https://dribbble.com/ThemeREX',
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/themerex_net/',
    }
]


export const footerHome = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Services',
        link: '/services',
    },
    {
        name: 'About Us',
        link: '/about',
    },

    {
        name: 'Shop',
        link: '/blog',
    },
    {
        name: 'Contact',
        link: '/contact',
    }
]
