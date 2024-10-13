import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Contact() {

    const { 
        register, 
        handleSubmit, 
        formState: { errors } } = useForm();
    
     const onSubmit = data => console.log(data);
  return (
    
    
    <>
    <div className="flex h-screen items-center  justify-center ">
    <div  className="w-[600px]">
  <div className="model-box">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">Back</Link>
    
    <h3 className="font-bold text-lg">Contact Us</h3>
    <div className="mt-4 space-y-2">
       
        <span>Name</span>
        <br />
        <input type="text" 
         placeholder='Enter your Full Name'
          className="w-80 py-1 px-3 border rounded-md outline-none" 
          {...register("name", { required: true })} /> <br />
           {errors.name && <span className="text-red-500">This field is required</span>}
        {/* {Email} */} <br />
        <span>Email</span>
        <br />
        <input type="email"  
        placeholder='Enter your Email ID' 
        className="w-80 py-1 px-3 border rounded-md outline-none " 
        {...register("email", { required: true })} /> <br />
         {errors.email && <span  className="text-red-500">This field is required</span>} 
    </div>
   {/* {Password} */}

   <div className="mt-4 space-y-2">
        <span>message </span>
        <br />
        <input type="text" 
         placeholder='Enter your Password'
          className="w-80 py-1 px-3 border rounded-md outline-none"
          {...register("message", { required: true })}  /> <br />
          {errors.message && <span  className="text-red-500">This field is required</span>}  
    </div>
  {/* Button  */}
  <div className="flex items-center justify-between mt-4">
    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Submit</button>
   
  </div>
  </form>
  </div>
</div>
 </div>
     </>
  )
}

export default Contact