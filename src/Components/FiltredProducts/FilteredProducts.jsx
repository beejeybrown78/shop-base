import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../FiltredProducts/ProductCard"
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from "react-bootstrap";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/productsSlice";
import Footer from "../Footer/Footer";


const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const genderButtons = ["чоловікам", "жінкам"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();
  return(
     <div className="">
    <h1 className=" bg-dark text-light h2 text-center py-2 font-bold">
            {type}
          </h1>
      <div className=" container pt-16">
        <div className="pl-14">
          
          <div className="d-flex align-item-center justify-content-between py-8 ">
            <div className="flex items-center">
              {genderButtons.map((item, index) => {
                return (
                  <div key={index}>
                    <Button 
                    variant="light" 
                      className="text-muted  text-lovercase font-semibold mr-4"
                      onClick={() => dispatch(filterGender(item))}
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <Button
                variant="light"
                className="text-muted  text-lovercase font-semibold mr-4"
                onClick={() => dispatch(sortByPrice())}
              >
                Висока ціна
              </Button>
              <Dropdown>
      <Dropdown.Toggle 
          variant="light"
        className="text-muted  text-lovercase font-semibold mr-4 ">
        Колір
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {colorButtons.map((item, index) => {
                    return (
                      <Dropdown.Item
                        style={{ color: item }}
                        key={index}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </Dropdown.Item>
                    );
                  })}
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle 
      variant="light"
      className="text-muted  text-lovercase font-semibold mr-4 ">
        Розмір
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {sizeButtons.map((item, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </Dropdown.Item>
                    );
                  })}
      </Dropdown.Menu>
    </Dropdown>
    

             
            </div>
            <div className="pr-14">
              <Button
                variant="light"
                className="text-muted  text-lovercase font-semibold mr-4"
                onClick={() => dispatch(filterProducts(type))}
              >
                Очистити фільтр
              </Button>
              </div>
          </div>
        </div>
        {error ? (
          <Error></Error>
        ) : (
          <div className="container">
          <div className="grid grid-cols-4 justify-items-beetwen  gap-5 ">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index} className=" pb-10">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FilteredProducts;
