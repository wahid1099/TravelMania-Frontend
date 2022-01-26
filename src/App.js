import logo from './logo.svg';
import './App.css';
import {BrowserRouter,  Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SingUpPage from "./Pages/SingUpPage";
import LoginPage from "./Pages/LoginPage";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div className="App">
        <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/singup" element={<SingUpPage/>}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
