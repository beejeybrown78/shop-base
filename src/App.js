import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./Components/FiltredProducts/FilteredProducts";
import SingleProduct from "./Components/FiltredProducts/SingleProduct";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
import OrderDetails from "./Components/OrderDetails/OrderDetails";



function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  return (
    
   
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Main></Main> : <Login></Login>}
          ></Route>

          <Route
            path="/filteredProducts/:type/*"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
          <Route
            path="/OrderDetails"
            element={<OrderDetails></OrderDetails>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
