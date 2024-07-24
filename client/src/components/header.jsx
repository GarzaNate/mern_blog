import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { signOutSuccess } from "../redux/user/userSlice";

function Header() {
  const { pathname: path } = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/auth/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {/* NAVBAR */}
      <Navbar className="border-b-2">
        <Link
          to={"/"}
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-blue-700 text-white rounded-lg">
            MERN
          </span>{" "}
          BLOG
        </Link>

        {/* possible search function */}
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        {/* Search Button */}
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">
          {/* Dark mode toggle */}
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          {/* Login Button */}

          {/* 
          // if currentUser is true, display signout button, else display signup button  */}
          {/* {currentUser ? (
            <Link >
              <Button onClick={handleSignout} className="bg-blue-700">
                Signout
              </Button>
            </Link>
          ) : (
          )} */}
          
          <Link to={"/sign-up"}>
            <Button className="bg-blue-700">Sign Up</Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={"div"}>
            <Link to={"/"}>Home</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"}>
            <Link to={"/profile"}>Profile</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"}>
            <Link to={"/contact"}>Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
