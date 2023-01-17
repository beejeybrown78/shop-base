import React from "react";
import Button from 'react-bootstrap/Button';
import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from "../../features/slices/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "Худі",
    "Сукні",
    "Костюми",
    "Взуття",
    "Футболки",
    "Джинси",
    "Куртки",
    "Сумки",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  color="gray"
                  size="lg"
                  variant="danger"
                  className=" border-none text-dark hover:bg-red duration-300 ease-in-out"
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-dark p-1 w-[55%] mx-auto rounded-pill">
        <h3 className="text-danger text-center  h4  font-bold  ">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="d-flex align-items-center justify-content-center py-4">
        <img
          className="h-[600px] w-[70%] rounded "
          src={clothes}
          alt="clothes"
        ></img>
      </div>
    </div>
  );
};

export default NavigateButtons;
