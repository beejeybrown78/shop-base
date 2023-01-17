import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];
 
  return (
    <div >
      <Card className="w-80 relative mx-2">
        <Typography
          variant="h4"
          className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700 text-md"
        >
          SALE%
        </Typography>
        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography color="red" className="font-medium" textGradient>
              Ціна:{" "}
              <span className="text-red-400 text-base font-extralight">
                {price} ₴
              </span>
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              Колір:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
            <Button 
            color="gray"
            size="md"
            variant="success"
            className=" sale__btn bg-danger  text-light  text-lovercase font-semibold " 
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
               }
              ripple={true}
            >
              До кошика
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
