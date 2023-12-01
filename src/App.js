import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Dashboard,
  Exercises,
  Foods,
  Goals,
  Login,
  Signup,
} from "./pages/index";
import { Navbar, ProtectedRoute } from "./components/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { USER_DATA } from "./redux/actionConstants";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (token) {
      dispatch({ type: USER_DATA, payload: user });

      navigate("/");
    }
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exercises"
          element={
            <ProtectedRoute>
              <Exercises />
            </ProtectedRoute>
          }
        />
        <Route
          path="/foods"
          element={
            <ProtectedRoute>
              <Foods />
            </ProtectedRoute>
          }
        />
        <Route
          path="/goals"
          element={
            <ProtectedRoute>
              <Goals />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
