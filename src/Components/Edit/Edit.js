import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();

    const loadData = useLoaderData()
    const information = loadData[0]
    const [users, setUsers] = useState(information)

    const handleUpdate = event => {
             event.preventDefault()
        console.log(users)

        fetch(`https://resolute-school-server.vercel.app/studentsEdit/${information?._id}`, {
            method: 'PUT',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success('successfully updated')

                }

            })
    }
    const handleChange = event => {
        const filed = event.target.name
        const value = event.target.value
        const newUser = { ...users }
        newUser[filed] = value;
        setUsers(newUser)
    }
    return (
        <div className='w-full mb-5 border-l-4 mt-10 ml-6'>
            <div className='ml-6'>
                <div className='mb-3 flex justify-center'>
                    <h1 className='text-3xl text-green-500 font-bold'>Update '{information?.firstName} {information?.lastName}s' info</h1>
                </div>
                <div className='flex justify-center'>
                    <img src={information?.image} className='w-52 rounded-3xl' />
                </div>
                <div className='flex justify-center'>
                    <form className='w-full' onSubmit={handleUpdate}>
                        <div className='flex gap-2'>
                            <input onChange={handleChange} name="firstName" placeholder='First Name' defaultValue={information?.firstName} className="mt-2 input input-bordered w-full " /> <br />
                            <input onChange={handleChange} name="lastName" placeholder='Last Name' defaultValue={information?.lastName} className="mt-2 input input-bordered w-full " /> <br />
                        </div>
                        <div className='flex gap-2'>
                            <select onChange={handleChange} name='class' defaultValue={information?.class} className='w-full mt-2 h-12 rounded-md border'>
                                <option value="">Select Class</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select onChange={handleChange} name='division' defaultValue={information?.division} className='w-full mt-2 h-12 rounded-md border'>
                                <option value="">Select Division</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>

                            <input onChange={handleChange} name='roll' defaultValue={information?.roll} type="number" placeholder="roll" className="mt-2 input input-bordered w-full " required /> <br />
                        </div>
                        <div className='flex gap-2'>
                            <input onChange={handleChange} name='address1' defaultValue={information?.address1} type="text" placeholder="address1" className=" mt-3 input input-bordered w-full " required /> <br />
                            <input onChange={handleChange} name='address2' defaultValue={information?.address2} type="text" placeholder="address2" className=" mt-3 input input-bordered w-full " required /> <br />
                        </div>
                        <div className='flex gap-2'>


                            <input onChange={handleChange} name='landmark' defaultValue={information?.landmark} type="text" placeholder="landmark" className=" mt-3 input input-bordered w-full " required /> <br />
                            <input onChange={handleChange} name='city' defaultValue={information?.city} type="text" placeholder="city" className=" mt-3 input input-bordered w-full " required /> <br />
                            <input onChange={handleChange} name='pincode' defaultValue={information?.pincode} type="text" placeholder="address2" className=" mt-3 input input-bordered w-full " required /> <br />
                        </div>
                        <div className='flex justify-center'>
                            <button className="btn btn-success mt-3 w-96">Update</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;