import CardItem from './CardItem'
import { ArrowIcon } from '../images/svgImages'

const FeaturedItem = () => {
    return (
        <div className="w-full h-auto pb-20">
            <h1 className="font-bold text-2xl pt-24 text-left">
                Featured Properties
            </h1>
            <div className="xs:flex-col md:flex text-left justify-between pt-3">
                <div>
                    <h5>Everything you need to know when you're looking</h5>
                </div>
                <div className='flex justify-start md:justify-center items-center mt-2 md:mt-0'>
                    <h5 className="text-cyan-500 font-bold mr-3">
                        View All Properties
                    </h5>
                    <ArrowIcon />
                </div>
            </div>
            <div className='xs:flex-col md:flex justify-between mt-20'>
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </div>
    )
}

export default FeaturedItem