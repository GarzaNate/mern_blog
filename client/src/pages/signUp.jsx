import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, Button } from "flowbite-react";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  // Function to handle form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      // Make a POST request to the server
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // Parse the response
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      // Navigate to login page if signup is successful
      navigate("/login");
    } catch (error) {
      setLoading(false);
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
            Sign Up Here!
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <TextInput
              placeholder="Username"
              type="text"
              id="username"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={handleChange}
            />
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
              {loading ? "Loading..." : "Sign Up"}
            </Button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Already have an account?</p>
            <Link to={"/login"}>
              <span className="text-blue-500">Login Here!</span>
            </Link>
          </div>
          <p className="text-red-700 my-4">
            {error && "Something went wrong!"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
