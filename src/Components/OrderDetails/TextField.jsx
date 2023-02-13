import React from 'react'
import { Input } from "@material-tailwind/react";
import { ErrorMessage, useField } from 'formik';


export const TextField = ({label,...props}) => {

  const [field, meta]=useField(props);


  return (
    <div className="justify-center align-center flex w-72 flex-col  m-auto mb-4 pb-4">
      <label className='' htmlFor={field.name}>{label}</label>
      <Input variant="standard" className="" 
        {...field}{...props}/>
        <ErrorMessage name={field.name}/>
    </div>
  )
}
