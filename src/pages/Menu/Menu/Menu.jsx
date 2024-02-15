import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="Our Menu"
        subTitle="Would you like to try a dish?"
      ></Cover>
    </div>
  );
};

export default Menu;
