import { TwitterIcon, LinkedinIcon, FacebookIcon } from '../images/svgImages'

const Footer = () => {
    return (
        <div>
            <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 text-left pb-7">
                <div className="">
                    <h4 className="text-md font-bold text-soft-grape">Product</h4>
                    <h6 className="text-gray-400 text-md my-3">Listing</h6>
                    <h6 className="text-gray-400 text-md my-2">Property</h6>
                    <h6 className="text-gray-400 text-md my-2">Agents</h6>
                    <h6 className="text-gray-400 text-md my-2">Blog</h6>
                </div>
                <div className="">
                    <h4 className="text-md font-bold text-soft-grape">Resources</h4>
                    <h6 className="text-gray-400 text-md my-3">Our Homes</h6>
                    <h6 className="text-gray-400 text-md my-2">Member Stories</h6>
                    <h6 className="text-gray-400 text-md my-2">Video</h6>
                    <h6 className="text-gray-400 text-md my-2">Free trial</h6>
                </div>
                <div className="mt-5 md:mt-0">
                    <h4 className="text-md font-bold text-soft-grape">Company</h4>
                    <h6 className="text-gray-400 text-md my-3">Patnerships</h6>
                    <h6 className="text-gray-400 text-md my-2">Terms of use</h6>
                    <h6 className="text-gray-400 text-md my-2">Privacy</h6>
                    <h6 className="text-gray-400 text-md my-2">Sitemap</h6>
                </div>
                <div className="mt-5 md:mt-0">
                    <h4 className="text-md font-bold text-soft-grape">Get in touch</h4>
                    <h6 className="text-gray-400 text-md my-3">You’ll find your next home, in any style you prefer.</h6>
                    <div className='w-full h-autoo flex'>
                        <div className='cursor-pointer'>
                            <TwitterIcon />
                        </div>
                        <div className='cursor-pointer'>
                            <LinkedinIcon />
                        </div>
                        <div className='cursor-pointer'>
                            <FacebookIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center pb-10">
                <h1 className="font-bold text-2xl">Estate.</h1>
                <h6 className="text-sm text-gray-400">Copyright 2022 by Estate, All rights reserved.</h6>
            </div>
        </div>
    )
}

export default Footer