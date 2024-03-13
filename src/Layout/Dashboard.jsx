import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className=" w-64 min-h-full bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdReviews></MdReviews>
              Add Review
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content  */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
