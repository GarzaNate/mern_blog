import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        {/* HEADER TITLE */}
        <h1>Welcome to the MERN blog!</h1>

        {/* NAV LIST */}
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/sign-up"}>
            <li>Sign Up</li>
          </Link>
          <Link to={"/login"}>
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
