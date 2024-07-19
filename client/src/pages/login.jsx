import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, Button } from "flowbite-react";

function Login() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // function to handle form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      // make a POST request to the server
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // parse the response
      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      // navigate to home page if login is successful
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to={"/"} className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-blue-700 text-white rounded-lg">
              MERN
            </span>{" "}
            BLOG
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            architecto pariatur esse dolorem quos, laudantium magni quis
            doloremque optio aperiam expedita, non fuga doloribus, error ipsam
            aliquid?
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <h1 className="text-3xl text-center font-semibold my-7">
            Login Here!
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <TextInput
              type="text"
              placeholder="Email"
              id="email"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={handleChange}
            />
            <TextInput
              type="text"
              placeholder="Password"
              id="password"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={handleChange}
            />
            <Button
              disabled={loading}
              className="text-white p-3 rounded-lg uppercase hover:opacity-90 bg-blue-700"
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
          <p className="text-red-700 my-4">
            {error && "Something went wrong!"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
