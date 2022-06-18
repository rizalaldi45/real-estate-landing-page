import NewsletterImage from '../images/newsletter.png'

const Newsletter = () => {
    return (
        <div className="w-full h-auto mt-32 mb-0 md:mb-32 xs:flex-col md:flex">
            <div className='w-full h-[31rem] bg-contain bg-no-repeat mx-auto' style={{ backgroundImage: `url(${NewsletterImage})`}} />
            <div 
                className='w-full flex flex-col h-[24rem] md:h-[29rem] xs:justify-start md:justify-center items-center text-left mt-7 md:mt-0'
            >
                <h1 className='text-4xl font-bold px-10 leading-normal'>
                    You’ve found a neighborhood you love.
                </h1>
                <p className='text-sm text-gray-400 mt-5 leading-relaxed px-10'>
                    When you own a home, you’re committing to living in one location for a while. In a recent Trulia survey, we found that five out of six respondents said finding the right neighborhood 
                </p>
                <div className='w-full h-auto flex justify-between px-10 mt-8'>
                    <div className=''>
                        <h1 className='font-bold text-2xl'>2,500</h1>
                        <h4 className='font-normal text-md mt-1'>Homes For Sale</h4>
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-2xl'>5,000+</h1>
                        <h4 className='font-normal text-md mt-1'>Homes Recently Sold</h4>
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-2xl'>170+</h1>
                        <h4 className='font-normal text-md mt-1'>Price Reduced</h4>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Newsletter