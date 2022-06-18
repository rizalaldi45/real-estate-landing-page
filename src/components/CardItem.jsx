import BgItem1 from '../images/bg-item1.png'
import { BedsIcon, SqftIcon, BothIcon } from '../images/svgImages'

const CardItem = () => {
    return (
        <div className="w-[23rem] h-auto bg-white rounded-xl mt-6 md:mt-0 mx-auto md:mx-0 shadow-xl">
            <div 
                className='w-full h-[15rem] bg-contain bg-no-repeat' 
                style={{backgroundImage: `url(${BgItem1})`}}
            >

            </div>
            <div className='p-5 text-left'>
                <h1 className='font-bold text-md'>$35000</h1>
                <h6 className='text-sm text-gray-400'>8502 Preston Rd. Inglewood, Maine 98280</h6>
                <div className='grid grid-cols-3 mt-2'>
                    <div className='flex items-center'>
                        <BedsIcon />
                        <h6 className='text-sm font-semibold pl-3'>5 Beds</h6>
                    </div>
                    <div className='flex items-center'>
                        <SqftIcon />
                        <h6 className='text-sm font-semibold pl-3'>5 Both</h6>
                    </div>
                    <div className='flex items-center'>
                        <BothIcon />
                        <h6 className='text-sm font-semibold pl-3'>2000sqft</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem