import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StudentView = () => {

    const data = useLoaderData()
    console.log(data)
    return (
        <div className='items-center border-l w-full flex justify-center mt-10'>
            <p className='font-bold text-2xl'><span className='text-green-400'>' {data[0].firstName} {data[0].lastName}'s '</span>  <br/> information</p> 
            <div className='ml-10'>
                 <div className='border p-3 w-96 rounded-2xl shadow-2xl'>
                     <img src={data[0].image} className='w-52 rounded-2xl'/> 
                     <p>Name : {data[0].firstName} {data[0].lastName}</p>
                     <p>Class: {data[0].class}</p>
                     <p>Division : {data[0].division}</p>
                     <p>Address : {data[0].address1}, {data[0].address2}</p>
                     <p>City : {data[0].city}</p>
                     <p>Landmark : {data[0].landmark}</p>
                     <p>Pincode : {data[0].pincode}</p>
            </div>
            </div>
           
        </div>
    );
};

export default StudentView;