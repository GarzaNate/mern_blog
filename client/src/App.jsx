import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/sign-up" element={ <SignUp /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
