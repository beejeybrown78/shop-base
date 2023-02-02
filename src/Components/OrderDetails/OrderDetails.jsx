import React from "react";
import { Input } from "@material-tailwind/react";
import Footer from "../Footer/Footer";
import { Button } from "react-bootstrap";
import { useSelector} from "react-redux";
import { useState } from 'react';



const OrderDetails = () =>{
  const initialState = {
    name:"",
    password:"",
    number:"",
    adress:"",

};
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [values, setValues] = useState(initialState);
  
  const onChange = (e=>{
    const{name, value} =e.target
    setValues({...values, [name]:value})
})

    return(
      <>
<div className="h-100vh ">
<h1 className=" bg-dark text-light h2 text-center py-2 font-bold">
             Оформлення замовлення
            </h1>
            <div className="mt-20">
            <div className="justify-center align-center flex w-72 flex-col gap-6 m-auto">
            <Input className='relative' label="Iм'я" 
                size="lg"
                type="text " 
                name="name"
                value={values.name} 
                onChange={onChange}
                  />
                
        <Input className='relative' 
            label="Пароль" 
            size="lg"
            type="password"
            name="password"
            maxlength ="15"
            x-moz-errormessage="вфівфівфівіф"

            
            value={values.password} 
            onChange={onChange}
               />
              
          <Input 
            label="телефон" 
            size="lg" 
            type="text "
            name="number"
            value={values.number}
            onChange={onChange}
             />
              <Input 
            label="адреса замовлення " 
            size="lg" 
            type="text "
            name="adress"
            value={values.adress}
            onChange={onChange}
             />
            <span className="ml-2 text-danger text-xl" >{totalPrice}₴</span>
            <Button onClick={() =>(totalPrice!==0 && alert("дякуємо за замовлення"))}
            className="bg-dark text-light text-lg p-2"
            size="sm"
             variant="filled">Оформити замовлення</Button>
            </div>
            <div></div>
            </div>
            
    </div>
    <div  className="mt-40">
    <Footer></Footer>
    </div>
    
 
   </>
    )
}
export default OrderDetails