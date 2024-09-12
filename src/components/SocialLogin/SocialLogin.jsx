import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="p-8">
      <div className="divider"></div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn text-blue-600 text-md"
        >
          <FcGoogle className="mr-2 text-xl"></FcGoogle>
          <h1>
            G<span className="text-red-600">o</span>
            <span className="text-yellow-500">o</span>
            <span>g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-600">e</span>
          </h1>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
