import React, {useState} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
  import {login} from "../../features/slices/authSlice"
  import { useDispatch } from 'react-redux';


const Login = () =>{

    const initialState = {
        name:"",
        password:"",
        image:"",

    };

    const [values, setValues] = useState(initialState);

    const onChange = (e=>{
        const{name, value} =e.target
        setValues({...values, [name]:value})
    })


    const dispatch = useDispatch();

    return (
    <div className=' grid grid-cols-1 items-center justify-items-center h-screen'>
        <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white" >
         Увійти 
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input className='relative' label="Iм'я" 
                size="lg"
                type="text " 
                name="name"
                value={values.name} 
                onChange={onChange}
                  />
                  <p className=' login__text  text-danger '>Ім'я має складатися з 4-10 символів!</p>
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
               <p className=' login__text  text-danger'>Пароль має складатися з 4-10 символів і містити принаймні 1 цифру, 1 спеціальний символ</p>
        <Input 
            label="Посилання на картинку" 
            size="lg" 
            type="text "
            name="image"
            value={values.image}
            onChange={onChange}
             />
              
        <div className="-ml-2.5">
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={() => dispatch(login(values))}>
        Увійти
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
        Зображення необов'язкове
        </Typography>
      </CardFooter>
    </Card>
    </div>)
}

export default Login