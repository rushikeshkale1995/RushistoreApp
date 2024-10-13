import React from 'react'
import Card from './Card'
import  list  from '../list.json'
import { Link } from 'react-router-dom'
function Course() {
  return (

       <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 dark:bg-slate-900 text-white" >
        <div className="pt-28 items-center justify-center text-center dark:bg-slate-900 text-white">
        <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to='/' >
          <button className= "mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
            <div className=" mt-12 grid md:grid-cols-4 grid-cols-1 hover: ">
                {  
                    list.map((item)=> (
                        <Card item={item} key={item.id}/>
                    ))
                }   

            </div>
       </div>

 
    
  )
}

export default Course