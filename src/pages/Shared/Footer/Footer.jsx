import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-600 h-28">
      <br />
      <h2 className="text-2xl uppercase text-center text-pink-500 mb-3">
        Social Platforms
      </h2>
      <div className="flex flex-row justify-center gap-6">
        <Link
          to="https://www.linkedin.com/in/farok-hossain-008444202/"
          target="_blank"
          className="text-green-500 text-3xl"
        >
          <FaLinkedin />
        </Link>
        <Link
          to="https://github.com/Farok-Hossain"
          target="_blank"
          className="text-green-500 text-3xl"
        >
          <FaGithub />
        </Link>
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
      </div>
    </div>
  );
};

export default Footer;

{
  /* <>
<div className=" footer p-10 bg-neutral text-neutral-content">
  <h6 className="footer-title text-pink-600 text-center">
    Social Platforms
  </h6>
  <>
    <div className="grid grid-flow-col gap-4 justify-center">
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
  </>
</div>
</> */
}
