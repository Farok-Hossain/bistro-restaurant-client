import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import FeaturedImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className=" featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className=" md:flex justify-center items-center bg-slate-500 bg-opacity-50  pb-20 pt-12 px-36">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div className=" md:ml-10">
          <p>12 February 2024</p>
          <p className=" uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            tenetur porro quibusdam quasi debitis ut explicabo vel quos ea enim!
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
