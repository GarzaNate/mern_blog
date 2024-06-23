import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Contact from "./pages/contact";
import Header from "./components/header";
import FooterCom from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}

export default App;


// DESIGN HOME PAGE, LOGIN, & SIGNUP
// Welcome to the Blog!
// New User? Sign Up here! (button)
// Already a user? Log in here!