import "react-responsive-modal/styles.css";
import "react-image-crop/dist/ReactCrop.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import { useStateValue } from "./State/StateProvider";
import { useEffect } from "react";
import Orders from "./Pages/Orders/Orders";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Users from "./Admin/Users/Users";
import AdminProducts from "./Admin/Products/AdminProducts";
import AdminOrders from "./Admin/Orders/AdminOrders";
import firebase from "firebase/app";
import { firebaseConfig } from "./Utils/firebase";
import AdminRoute from "./RouteHelper/AdminRoute";

firebase.initializeApp(firebaseConfig);

function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: "LOAD_CART",
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Route exact component={Signup} path="/signup" />
        <Route exact component={Signin} path="/signin" />
        <Route exact component={Home} path="/" />
        <Route exact component={Cart} path="/cart" />
        <Route exact component={Orders} path="/orders" />

        <AdminRoute exact component={Dashboard} path="/admin" />
        <AdminRoute exact component={Users} path="/admin/users" />
        <AdminRoute exact component={AdminProducts} path="/admin/products" />
        <AdminRoute exact component={AdminOrders} path="/admin/orders" />
      </BrowserRouter>
    </div>
  );
}

export default App;
