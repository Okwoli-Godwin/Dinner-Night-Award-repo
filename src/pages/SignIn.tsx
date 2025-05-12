import { FormEvent, useState } from "react";
import Logo from "../images/cyonlogo.png";
import "./SignIn.css";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    const url = "https://our-lady-database.onrender.com/api/login";

    try {
      const response = await axios.post(url, { email });
      toast.success("Login successful");
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
     
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const errorMessage = err.response.data.message || "An error occurred";
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="SignIn w-full h-[100vh] flex flex-col items-center justify-center text-white gap-24">
        <div className="inner md:w-[40%] md:h-[max-content] h-[70vh] p-10 md:rounded-2xl flex flex-col gap-14">
          <div className="flex items-center justify-center gap-3">
            <img src={Logo} alt="Logo" className="w-8" />
            <h1 className="text-4xl text-yellow-200">CYON OLR</h1>
          </div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-9 items-center justify-center"
          >
            <input
              type="email"
              placeholder="Enter your Email"
              className="border-b-2 border-gray-200 bg-inherit outline-none w-full px-4"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button
              type="submit"
              className="border-2 border-gray-200 w-32 p-2 rounded font-extrabold hover:bg-yellow-500 hover:text-black"
              disabled={loading}
            >
              {loading ? <BeatLoader color="white" size={10} /> : "Login"}
            </button>

            <span>
              Just Want to Get a Ticket? {" "}
              <Link to="/ticket" className="text-yellow-300 underline">
                Ticket
              </Link>
            </span>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default SignIn;
