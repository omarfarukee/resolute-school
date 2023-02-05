import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHosKey = '29473dd4ab78ebc95009722bc0558d38';
    const navigate = useNavigate()

    const handleAddItem = (data) => {
        console.log(data)

        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?&key=${imageHosKey}`
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)


                    const product = {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        image: imgData.data.url,
                        class : data.class,
                        roll: data.roll,
                        division: data.division,
                        city: data.city,
                        address1: data.address1,
                        address2: data.address2,
                        landmark : data.landmark,
                        pincode : data.pincode

                    }


                    fetch('https://resolute-school-server.vercel.app/students', {

                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {

                            console.log(result)
                            alert('its can take few moment please wait')
                            toast.success('added student successfully')
                          navigate('/manage')
                        })

                }
            })
    }

    return (
        <div className='border-l-4 w-full ml-10 mt-5'>
            <div className='flex justify-center text-2xl font-bold '>
                 <h1>add student</h1>
            </div>
           

            <div className=''>
                <form onSubmit={handleSubmit(handleAddItem)} className=''>

                    <div className=' p-5 rounded-2xl'>

                        <div className='grid grid-cols-2'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">First Name</span></label>
                                <input type="text" {...register("firstName", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Last Name</span></label>
                                <input type="text" {...register("lastName", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
                            </div>
                        </div>


                        <div className='grid grid-cols-3'>
                            <div className=''>
                                <label className="label"> <span className="label-text">Choose Class</span></label>

                                <select className="select select-bordered  w-full max-w-xs" {...register("class")}>
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
                            </div>

                            <div className=''>
                                <label className="label"> <span className="label-text">Choose Division</span></label>

                                <select className="select select-bordered  w-full max-w-xs" {...register("division")}>
                                <option value="">Select Division</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                    <option value="E">E</option>
                                </select>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Roll</span></label>
                                <input type="number" {...register("roll", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.roll && <p className='text-red-500'>{errors.roll.message}</p>}
                            </div>
                        </div>


                        <div className='grid grid-cols-2'>
                            <div className="form-control">
                                <label className="label"> <span className="label-text">Address line1</span></label>
                                <input type="text" {...register("address1", {
                                    required: "Required"
                                })} className="input input-bordered w-11/12" />
                                {errors.address1 && <p className='text-red-500'>{errors.address1.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label"> <span className="label-text">address2</span></label>
                                <input type="text" {...register("address2", {
                                    required: "Required"
                                })} className="input input-bordered w-11/12" />
                                {errors.address2 && <p className='text-red-500'>{errors.address2.message}</p>}
                            </div>
                        </div>

                        <div className='grid grid-cols-3'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Landmark</span></label>
                                <input type="text" {...register("landmark", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.landmark && <p className='text-red-500'>{errors.landmark.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">City</span></label>
                                <input type="text" {...register("city", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.city && <p className='text-red-500'>{errors.city.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Pincode</span></label>
                                <input type="text" {...register("pincode", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.pincode && <p className='text-red-500'>{errors.pincode.message}</p>}
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Photo (photo Should be png/jpg format)</span></label>
                            <input type="file" {...register("image", {
                                required: 'Required'
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                        </div>

                    </div>

                    <div className='flex justify-center mb-6'>
                        <input className='btn btn-success  mt-4 ' value="Add student" type="submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddStudent;