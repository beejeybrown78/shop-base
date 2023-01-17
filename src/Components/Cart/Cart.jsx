import { Fragment} from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector,  useDispatch } from "react-redux";
import { Tooltip } from "@material-tailwind/react";
import { removeFromCart } from "../../features/slices/cartSlice";


const Cart =({openModal, setOpen})=>{

    const cart = useSelector((state) =>state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

   const dispatch = useDispatch(); 
 
    return (<div>
        {cart.length > 0 ? (
          <Fragment>
            <Dialog
              className="border-0 outline-0"
              open={openModal}
              handler={() => setOpen(false)}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader>Кошик</DialogHeader>
              <DialogBody
                divider
                className="d-flex flex-col justify-center items-start"
              >
                {cart.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="grid grid-cols-2 py-4">
                        <div>
                          <img
                            className="h-[125px] rounded-md"
                            src={item.img}
                            alt={item.name}
                          ></img>
                          <div className="flex flex-col items-start">
                            <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                              {item.name}
                            </h4>
                          </div>
                          <div className="max-w-xs">
                            <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                              {item.text}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Вибраний розмір:{" "}
                            <span className="ml-2">{item.size}</span>
                          </p>
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                            Вибраний колір :{" "}
                            <span
                              className="ml-2 rounded-full px-2"
                              style={{backgroundColor:item.color}}
                            ></span>
                          </p>
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                            Кількість: <span className="ml-2">{item.amount}</span>
                          </p>
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                            ціна за одиницю:{" "}
                            <span className="ml-2">{item.price}₴</span>
                          </p>
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Загальна вартість :{" "}
                            <span className="ml-2">{item.totalPrice}₴</span>
                          </p>
                          <div className="pt-4">
                            <Tooltip
                              content="Видалити з кошика"
                              placement="bottom"
                            >
                              <Button
                                onClick={() => dispatch(removeFromCart(item))}
                                size="sm"
                                color="red"
                                ripple={true}
                                variant="filled"
                              >
                               Видалити
                              </Button>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </DialogBody>
              <DialogFooter className="flex justify-start items-center">
                <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                  Загальна сумма :{" "}
                  <span className="ml-2">{totalPrice}₴</span>
                </p>
              </DialogFooter>
            </Dialog>
          </Fragment>
        ) : (
          <Fragment>
            <Dialog
              className="border-0 outline-0"
              open={openModal}
              handler={() => setOpen(false)}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader>Кошик </DialogHeader>
              <DialogBody divider>
                <div>
                  <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                  У вашому кошику пусто
                  </h1>
                  <p className="text-black text-base font-inter tracking-normal leading-none ">
                    Додайте товари
                  </p>
                </div>
              </DialogBody>
            </Dialog>
          </Fragment>
        )}
      </div>)
}

export default Cart;