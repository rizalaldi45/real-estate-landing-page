import HamburgerIcon from '../images/hamburger.png'
import Button from './Button'

const Navbar = () => {
    return (
        <div className="w-full flex">
            <div className="w-full hidden md:flex justify-between">
                <div className="flex justify-start w-3/4">
                    <ul className='inline-flex py-8 font-bold flex justify-center items-center'>
                        <li className='mr-5 font-bold text-2xl cursor-pointer'>Estate.</li>
                        <li className='mr-5 font-medium cursor-pointer'>Home</li>
                        <li className='mr-5 font-medium cursor-pointer'>Features</li>
                        <li className='mr-5 font-medium cursor-pointer'>Service</li>
                        <li className='mr-5 font-medium cursor-pointer'>Listed</li>
                        <li className='mr-5 font-medium cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className="flex justify-end w-1/4">
                    <ul className='inline-flex py-8 font-bold flex justify-center items-center'>
                        <li className='ml-5 font-medium cursor-pointer'>Login</li>
                        <li className='ml-5 font-medium w-20 h-10'>     
                            <Button width={20} height={10} color='bg-soft-grape'>Signup</Button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='md:hidden py-8 cursor-pointer'>
                <img src={HamburgerIcon} width="27" height='32' alt='' />
            </div>
        </div>
    )
}

export default Navbar