import React from 'react'

const GetQuote = () => {
    return (
        <div className='bg-main '>
            <div className='max-w-[1293px] mx-auto md:px-0 px-10 py-20 flex flex-col md:flex-row justify-between  md:items-center'>
                <div className=''>
                    <p className='md:text-6xl text-2xl text-white font-medium'>Get a 30% discount on car diagnostics</p>
                </div>
                <div>
                    <button className='bg-white uppercase py-4 font-medium px-10'>
                        Get a quote
                    </button>
                </div>
            </div>

        </div>
    )
}

export default GetQuote