import { BedsIcon, SqftIcon, BothIcon } from "../images/svgImages";

const CardItem = ({ image, price, address, bed, wide, both }) => {
  return (
    <div className="w-[100%] md:w-[30%] h-fit bg-white rounded-2xl mt-6 md:mt-0 mx-auto md:mx-0 shadow-xl">
      <div className="w-full h-[50%] bg-cover bg-no-repeat bg-center object-fill">
        <img className="rounded-t-lg" src={image} alt="" />
      </div>
      <div className="p-5 text-left mt-2">
        <h1 className="font-bold text-md">${price}</h1>
        <h6 className="text-sm text-gray-400">{address}</h6>
        <div className="flex flex-wrap justify-between mt-2">
          <div className="flex items-center">
            <BedsIcon />
            <h6 className="text-sm font-semibold pl-3">{bed} Beds</h6>
          </div>
          <div className="flex items-center">
            <SqftIcon />
            <h6 className="text-sm font-semibold pl-3">{both} Both</h6>
          </div>
          <div className="flex items-center mt-3 my-2">
            <BothIcon />
            <h6 className="text-sm font-semibold pl-3">{wide}sqft</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
