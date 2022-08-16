import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path ='/home' element={<ProtectedRoute>
          <Home/>
        </ProtectedRoute>}/> */}
        </Routes>
      </AuthContextProvider>
      <Footer/>
    </>
  );
}

export default App;
