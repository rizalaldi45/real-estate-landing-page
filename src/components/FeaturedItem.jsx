import CardItem from "./CardItem";
import { ArrowIcon } from "../images/svgImages";
import BgItem1 from "../images/bg-item1.jpg";
import BgItem2 from "../images/bg-item2.jpg";
import BgItem3 from "../images/bg-item3.jpg";

const FeaturedItem = () => {
  const dataListHotels = [
    {
      image: BgItem1,
      price: 3100,
      address: "8502 Preston Rd. Inglewood, Maine 98280",
      bed: 3,
      both: 4,
      wide: 2300,
    },
    {
      image: BgItem2,
      price: 2500,
      address: "1514 Boone Crockett Lane",
      bed: 2,
      both: 3,
      wide: 1700,
    },
    {
      image: BgItem3,
      price: 3700,
      address: "2666 Lightning Point Drive",
      bed: 4,
      both: 5,
      wide: 2900,
    },
  ];

  return (
    <div className="w-full h-auto pb-20">
      <h1 className="font-bold text-2xl pt-24 text-left">
        Featured Properties
      </h1>
      <div className="xs:flex-col md:flex text-left justify-between pt-3">
        <div>
          <h5>Everything you need to know when you're looking</h5>
        </div>
        <div className="flex justify-start md:justify-center items-center mt-2 md:mt-0">
          <h5 className="text-cyan-500 font-bold mr-3">View All Properties</h5>
          <ArrowIcon />
        </div>
      </div>
      <div className="xs:flex-col md:flex justify-between mt-20">
        {dataListHotels.map((data, index) => (
          <CardItem
            key={`list-hotel-${index}`}
            image={data.image}
            address={data.address}
            price={data.price}
            wide={data.wide}
            both={data.both}
            bed={data.bed}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItem;
