import Button from './Button'
import BuyIcon from '../images/buy.png'
import RentIcon from '../images/rent.png'
import SellIcon from '../images/sell.png'
import { ArrowIcon } from '../images/svgImages'

const Flow = () => {
    return (
        <div className="w-full h-auto pb-20">
            <div className='text-center'>
                <h1 className="font-bold text-2xl">
                    How its works ?
                </h1>
                <p className="text-sm text-gray-400 mt-3">
                    Everything you need to know when you're looking to buy,<br/> rent, or sell - all in one place.
                </p>
            </div>
            <div className="mt-20 flex justify-around">
                <div className='text-center'>
                    <img className='mx-auto' src={BuyIcon} width={50} height={55} alt='' />
                    <h4 className='text-xl font-bold mt-5 mb-2'>
                        Buyer Guides
                    </h4>
                    <div className='flex-col md:flex items-center'>
                        <h6 className='text-md text-cyan-500 font-bold xs:mr-0 md:mr-3'>
                            How to buy
                        </h6>
                        <div className='w-full flex justify-center mt-2'>
                            <ArrowIcon />
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='mx-auto' src={RentIcon} width={50} height={55} alt=''  />
                    <h4 className='text-xl font-bold mt-5 mb-2'>
                        Renter Guides
                    </h4>
                    <div className='flex-col md:flex items-center'>
                        <h6 className='text-md text-cyan-500 font-bold mr-3'>
                            How to rent
                        </h6>
                        <div className='w-full flex justify-center mt-2'>
                            <ArrowIcon />
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='mx-auto' src={SellIcon} width={50} height={55} alt=''  />
                    <h4 className='text-xl font-bold mt-5 mb-2'>
                        Seller Guides
                    </h4>
                    <div className='flex-col md:flex items-center'>
                        <h6 className='text-md text-cyan-500 font-bold mr-3'>
                            How to sell
                        </h6>
                        <div className='w-full flex justify-center mt-2'>
                            <ArrowIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto w-40 h-12 mt-14'>
                <Button width={40} height={12} color='bg-soft-grape'>See All Guidelines</Button>
            </div>
        </div>
    )
}

export default Flow