import React from 'react'
import {Formik, Form} from 'formik'
import { TextField } from './TextField'
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { useSelector} from "react-redux";
import * as Yup from "yup";


export const OrderDetails = () => {
  const validate = Yup.object({
    firstName: Yup.string()
    .max(12,"Має  бути не більше 12 символів")
    .required("необхідно вказати і'мя"),
    LastName: Yup.string().max(12,"Має  бути не більше 12 символів")
    .required("необхідно вказати прізвище"),
    email: Yup.string().email("електронна пошта недійсна")
    .required("необхідно вказати"),
    phone: Yup.string().max(12,"Має бути не менше 12 символів").min(12,"Має бути не менше 12 символів")
    .required("необхідно вказати номер телефону"),
    adress: Yup.string().min(12,"")
    .required("необхідно вказати адресу замовлення"), 
    
  })

  const totalPrice = useSelector((state) => state.cart.totalPrice);


  return (
    <>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
        alert('Дякуємо за замовлення')
      }}
    >
    
     {formik=>(
      <div>
        <h1 className=" bg-dark text-light h2 text-center py-2 font-bold mb-12">
             Оформлення замовлення
            </h1>
            
            <Form>
              <TextField  label="Ім'я" name="firstName" type="text"/>
              <TextField label="Прізвище" name="LastName" type="text"/>
              <TextField label="Email " name="email" type="email"/>
              <TextField label="Телефон " name="phone" type="Phone"/>
              <TextField label="Адреса замовлення" name="adress" type="text"/> 
             <div className="flex flex-col items-center">
             <span className="mr-60 text-danger text-xl" >{totalPrice}₴</span>
             </div>
              <div className='flex flex-col items-center mt-4 mb-10'>
              <Button type="submit" className="bg-dark text-light text-lg p-2" size="sm"
               variant="filled">Оформити замовлення</Button></div>
            </Form>
      </div>
     )
     }
    </Formik>
    <Footer className="pb-20"/>
    </>
  )
}
 export default OrderDetails
