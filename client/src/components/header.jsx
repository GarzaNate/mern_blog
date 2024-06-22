import { Link, useLocation } from "react-router-dom";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const { pathname: path } = useLocation();
  return (
    <div>
      {/* NAVBAR */}
      <Navbar className="border-b-2">
        <Link
          to={"/"}
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
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
          <Link to={"/login"}>
            <Button gradientDuoTone="purpleToBlue">Login</Button>
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
        {/* NAV LIST */}
        {/* <ul className="flex gap-4">
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={"/sign-up"}>
            <li>Sign Up</li>
          </Link>
          <Link to={"/login"}>
            <li>Login</li>
          </Link>
        </ul> */}
      </Navbar>
    </div>
  );
}

export default Header;
