import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className=" footer p-10 bg-neutral text-neutral-content ">
        <nav>
          <h6 className="footer-title text-pink-600">Social Platforms</h6>
          <div className="grid grid-flow-col gap-4">
            <Link
              to="https://www.facebook.com/profile.php?id=100006429429427"
              target="_blank"
              className="text-green-500 text-3xl"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/farok_afs/"
              target="_blank"
              className="text-green-500 text-3xl"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://x.com/farok_afs"
              target="_blank"
              className="text-green-500 text-3xl"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/in/farok-hossain-008444202/"
              target="_blank"
              className="text-green-500 text-3xl"
            >
              <FaLinkedin />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
