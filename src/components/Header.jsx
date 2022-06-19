import { HouseIlustration } from '../images/svgImages'
import Button from './Button'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="h-full flex pb-40">
            <div className="w-full lg:w-6/12 flex-col text-left h-auto justify-start items-start mt-40">
                <h5 className="mb-6">Welcome to Estate Agency</h5>
                <h1 className="text-7xl font-black leading-tight break-all md:break-normal">
                    <Typed
                        strings={['Discover a place you will love to live. &nbsp;']}
                        typeSpeed={60}
                    />
                </h1>
                <h5 className="mt-8 text-soft-gray leading-relaxed">
                    get the best real estate deals first, before they hit the mass market! hot foreclosures delas with one simple search
                </h5>
                <div className="mt-10 w-40 h-12">
                    <Button margin={10} width={40} height={12} color='bg-soft-grape'>More About Us</Button>
                </div>
            </div>
            <div className="w-6/12 hidden lg:flex justify-end items-center mt-24">
                <HouseIlustration />
            </div>
        </div>
    )
}

export default Header