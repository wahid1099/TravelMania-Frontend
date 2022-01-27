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
import AdminRoute from "./PrivateRoute/AdminRoute";
import ManageBLogs from "./Components/Admin/ManageBLogs";
import ManageExperince from "./Components/Admin/ManageExperince";
import MakeAdmin from "./Components/Admin/MakeAdmin";
import AddBLogsAdmin from "./Components/Admin/AddBLogsAdmin";
import AddTripSite from "./Components/Admin/AddTripSite";
import ManageAlltripssites from "./Components/Admin/ManageAlltripssites";
import BlogDetails from "./Components/Blogs/BlogDetails";

function App() {
  return (
    <div className="App">
           <AuthProvider>
         <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/singup" element={<SingUpPage/>}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/blog/:blogId" element={<PrivateRoute>
                <BlogDetails/>
            </PrivateRoute>}>
            </Route>
            {/*nested routing*/}
            <Route path="/dashboard" element={<Dahsboard />}>
                user private Routes
                <Route exact path="/dashboard/addexperince" element={<PrivateRoute><AddExperince/></PrivateRoute>}>
                </Route>
                <Route exact path="/dashboard/addblog" element={<PrivateRoute><AddBlog/></PrivateRoute>}>
                </Route>
                {/*user api*/}

                {/*Admin Private Routes*/}
                <Route exact path="/dashboard/addtoursite" element={<AdminRoute><AddTripSite/></AdminRoute>}>
                </Route>
                <Route exact path="/dashboard/managetrip" element={<AdminRoute><ManageAlltripssites/></AdminRoute>}>
                </Route>

                <Route exact path="/dashboard/addblogadmin" element={<AdminRoute><AddBLogsAdmin/></AdminRoute>}>
                </Route>

                <Route exact path="/dashboard/manageblogs" element={<AdminRoute><ManageBLogs/></AdminRoute>}>
                </Route>

                <Route exact path="/dashboard/mamageexperince" element={<AdminRoute><ManageExperince/></AdminRoute>}>
                </Route>
                <Route exact path="/dashboard/makeadmin" element={<AdminRoute><MakeAdmin/></AdminRoute>}>
                </Route>


            </Route>
            {/*nested routing*/}
        </Routes>
      </BrowserRouter>
           </AuthProvider>

    </div>
  );
}

export default App;
