import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const noHeaderFotter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {noHeaderFotter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFotter || <Footer></Footer>}
    </div>
  );
};

export default Main;
