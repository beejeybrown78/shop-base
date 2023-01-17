import React,{useState} from "react";
import logo from "..//../assets/images/logo.png"
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { logout } from "../../features/slices/authSlice";

const Navbar =()=>{

    const totalAmount = useSelector((state) => state.cart.totalAmount)

    const user = useSelector((state) => state.user.user);
    const {name, image} =user ;


    const [open, setOpen] = useState(false);
 
    const handleOpen = () => {setOpen(true)}

    const dispatch = useDispatch()
    
    return (
        <>
    
        <div className="bg-dark ">
            <div className=" text-light text-center p-4 h2 font-bold m-0"></div>
        </div>
        <div className="">
        <div className="  d-flex justify-content-around align-items-center">
            <div>
                <a href="">
                <img className=" j w-100 height:76px " src={logo} alt="store"></img>
                </a>
            </div>
            <div className="  d-flex flex-row align-items-center ">
                
                <div className=" d-flex flex-row align-items-center   ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" 
                    strokeWidth="2"
                    stroke="#000"
                    className="w-6 h-6">
                    <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <p className="text-dark  mr-4 ">Список бажань</p>
                </div>
                <div className="d-flex flex-row align-items-center cursor-pointer " onClick={handleOpen}>
                    {totalAmount>0?<span className="rounded-full bg-gray-300 px-2 font-Inter text-sm mr-1">{totalAmount}</span>:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#000"
                    className="w-6 h-6">
                    <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>}
               
<p className="text-black font-Inter font-medium tracking-normal leading-none">Кошик</p>
<div>
    {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
    </div>

                </div>
                <div className="d-flex flex-row  items-center cursor-pointer pl-4">{image && (<Avatar src={image} alt="avatar" size="sm" className="mr-2"></Avatar>)}
                <div onClick={()=> dispatch(logout())}>
                    <Tooltip content="Вийти" placement="bottom">
                    <p className="font-bold">
                        Привіт, {name.charAt("0").toUpperCase()+name.slice(1)}
                    </p></Tooltip> 
                </div>
                </div>
            </div>
        </div></div>
        <div className="bg-black p-4 w-f100  d-flex justify-content-around">
            <div className="text-light text-align-center font-weight-normal h-3">Знижка 50%</div>
            <div className="text-light text-align-center font-weight-normal h-3">Безкоштовна доставка та повернення</div>
            <div className="text-light text-align-center font-weight-normal h-3">Різні способи оплати</div>
        </div>
    
    </>
    )
}

export default Navbar