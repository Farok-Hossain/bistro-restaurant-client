import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Bistro from "../Bistro/Bistro";
import Call from "../Call/Call";
import Card from "../Card/Card";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Bistro></Bistro>
      <PopularMenu></PopularMenu>
      <Call></Call>
      <Card></Card>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
