import React, { useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import {AiTwotoneDelete } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageStudent = () => {
    const {allst, setAllst} = useState([])

    const { data: allStudents = [], refetch} = useQuery({
        queryKey: ['allStudents'],
        queryFn: async () => {
            const res = await fetch(`https://resolute-school-server.vercel.app/students`);
            const data = await res.json();
            return data;
        }  
    });

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, want to delete Student info?')
        if(proceed){
            fetch( `https://resolute-school-server.vercel.app/students/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('Student info delete successfully done')
                    const remaining = allst.filter(st => st._id !== id)

                    setAllst(remaining)
                    window.location.reload()
                    refetch()
                    
                }
            })
        }
}
    return (
        <div className=' ml-4 border-l-4 w-11/12 mt-10'>
            <div className='flex justify-center text-2xl font-bold '>
                <h1>Manage students</h1>
            </div>
                
            <div className="overflow-x-auto p-10">
                <table className="table w-full border">
                    <thead>
                        <tr>
                            <th>Student Photo</th>
                            <th>Student Name</th>
                            <th>Class</th>
                            <th>Roll</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allStudents?.map(student => <tr key={student._id}>
                              
                                <td><img src={student.image} alt=""className="w-24 rounded-full" /></td>
                                <td>{student.firstName} {student.lastName}</td>
                                <td>{student.class}-{student.division}</td>
                                <td>{student.roll}</td>
                                <td><button><Link to={`/students/${student?._id}`}><FaEye className='text-2xl hover:text-black'></FaEye></Link></button></td>
                                <td><button><Link to={`/studentsEdit/${student?._id}`}><FaEdit className='text-2xl hover:text-black'></FaEdit></Link></button></td>
                                <td><button onClick={() => handleDelete(student._id)}><AiTwotoneDelete className='text-2xl hover:text-black'></AiTwotoneDelete></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
             </div>
        </div>
    );
};

export default ManageStudent;