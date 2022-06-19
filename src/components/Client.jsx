import { StartReviewIcon } from '../images/svgImages'
import Logo from '../images/logo.png'
import Logo1 from '../images/logo-1.png'
import Logo2 from '../images/logo-2.png'
import Logo3 from '../images/logo-3.png'
import Logo4 from '../images/logo-4.png'

const Client = () => {
    return (
        <div className="h-auto w-full my-20">
            <div className="flex justify-between flex-col md:flex-row">
                <div className="w-full text-left">
                    <h1 className="font-bold text-2xl pb-3">Estate.</h1>
                    <h5 className="font-normal text-sm">
                        More than 45,000+ companies trust Estate
                    </h5>
                </div>
                <div className="w-full flex flex-col text-left md:text-right">
                    <div className='flex justify-start md:justify-end mt-3 md:mb-3'>
                        <StartReviewIcon />
                    </div>
                    <h5 className="font-normal text-sm pt-3 md:pt-0">
                        5 Star Ratings (2k+ Review)
                    </h5>
                </div>
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-10 md:mt-15 w-full grid grid-cols-2 md:grid-cols-5 place-content-around"> 
                <img className='py-4' src={Logo} width={180} height={40} alt=""/>
                <img className='py-4 justify-self-center md:mx-auto' src={Logo1} width={130} height={40} alt=""/>                
                <img className='py-4 md:mx-auto' src={Logo2} width={100} height={40} alt=""/>
                <img className='py-4 justify-self-center md:mx-auto' src={Logo3} width={130} height={40} alt=""/>
                <img className='py-4 md:justify-self-end' src={Logo4} width={150} height={40} alt=""/>
            </div>
        </div>
    )
}

export default Client