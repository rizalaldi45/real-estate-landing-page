import NewsletterImage from '../images/newsletter.png'

const Newsletter = () => {
    return (
        <div className="w-full h-auto mt-20 mb-0 md:mb-20 xs:flex-col md:flex">
            <div className='w-full h-auto bg-cover bg-no-repeat mx-auto'>
                <img className='bg-center' src={NewsletterImage} alt='' />
            </div>
            <div 
                className='w-full flex flex-col h-auto xs:justify-start md:justify-center items-center text-left mt-7 md:mt-0'
            >
                <h1 className='text-4xl font-bold break-all md:break-normal text-justify md:text-left px-0 md:px-10 leading-normal'>
                    You’ve found a neighborhood you love.
                </h1>
                <p className='text-sm text-gray-400 mt-5 leading-relaxed px-0 md:px-10'>
                    When you own a home, you’re committing to living in one location for a while. In a recent Trulia survey, we found that five out of six respondents said finding the right neighborhood 
                </p>
                <div className='w-full h-auto flex flex-wrap justify-between px-0 md:px-10 mt-3 md:mt-8'>
                    <div className='my-3 md:my-0'>
                        <h1 className='font-bold text-2xl'>2,500</h1>
                        <h4 className='font-normal text-md mt-1'>Homes For Sale</h4>
                    </div>
                    <div className='my-3 md:my-0'>
                        <h1 className='font-bold text-2xl'>5,000+</h1>
                        <h4 className='font-normal text-md mt-1'>Homes Recently Sold</h4>
                    </div>
                    <div className='my-3 md:my-0'>
                        <h1 className='font-bold text-2xl'>170+</h1>
                        <h4 className='font-normal text-md mt-1'>Price Reduced</h4>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Newsletter