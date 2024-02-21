import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFotter = location.pathname.includes("login");

  return (
    <div>
      {noHeaderFotter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFotter || <Footer></Footer>}
    </div>
  );
};

export default Main;
