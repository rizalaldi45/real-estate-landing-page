import Button from "./Button"

const GetStarted = () => {
    return (
        <div className="w-full h-auto bg-soft-grape rounded-xl my-14 flex p-10 md:p-20">
            <div className="flex flex-col justify-center items-start">
                <h1 className="font-bold text-2xl text-white">
                    Featured Properties
                </h1>
                <h5 className="text-sm text-white mt-3">
                    Everything you need to know when you're looking
                </h5>
                <div className="w-36 h-10 text-black mt-8">
                    <Button width={36} height={10} color='bg-white' fontColor='text-soft-grape'>Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted