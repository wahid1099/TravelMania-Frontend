import logo from './logo.svg';
import './App.css';
import {BrowserRouter,  Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SingUpPage from "./Pages/SingUpPage";
import LoginPage from "./Pages/LoginPage";
import AuthProvider from "./Context/AuthProvider";
import Dahsboard from "./Pages/Dahsboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddExperince from "./Components/User/AddExperince";
import AddBlog from "./Components/User/AddBlog";

function App() {
  return (
    <div className="App">
           <AuthProvider>
         <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/singup" element={<SingUpPage/>}></Route>
            <Route path="/login" element={<LoginPage />}></Route>

            {/*nested routing*/}
            <Route path="/dashboard" element={<Dahsboard />}>
                user private Routes
                <Route exact path="/dashboard/addexperince" element={<PrivateRoute><AddExperince/></PrivateRoute>}>
                </Route>
                <Route exact path="/dashboard/addblog" element={<PrivateRoute><AddBlog/></PrivateRoute>}>
                </Route>

                {/*<Route exact path="/dashboard/addreview" element={<PrivateRoute><AddReview/></PrivateRoute>}>*/}
                {/*</Route>*/}
                {/*<Route exact path="/dashboard/payment" element={<PrivateRoute><Payment/></PrivateRoute>}>*/}
                {/*</Route>*/}

                {/*/!*Admin Private Routes*!/*/}
                {/*<Route exact path="/dashboard/manageorder" element={<AdminRoute><ManageOrders/></AdminRoute>}>*/}
                {/*</Route>*/}

                {/*<Route exact path="/dashboard/addservice" element={<AdminRoute><AddService/></AdminRoute>}>*/}
                {/*</Route>*/}

                {/*<Route exact path="/dashboard/manageservice" element={<AdminRoute><ManageService/></AdminRoute>}>*/}
                {/*</Route>*/}
                {/*<Route exact path="/dashboard/makeadmin" element={<AdminRoute><MakeAdmin/></AdminRoute>}>*/}
                {/*</Route>*/}


            </Route>
            {/*nested routing*/}
        </Routes>
      </BrowserRouter>
           </AuthProvider>

    </div>
  );
}

export default App;
