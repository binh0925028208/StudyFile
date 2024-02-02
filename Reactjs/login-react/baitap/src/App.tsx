import { useState } from "react";
import "./App.css";
import Login from "./components/login/login";
import Register from "./components/register/register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toShowRegister = () => {
    setShowLogin(false);
  };
  const toShowLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
      <ToastContainer />
      {showLogin ? (
        <Login btnRegister={toShowRegister} />
      ) : (
        <Register btnLogin={toShowLogin} />
      )}
    </div>
  );
}

export default App;
