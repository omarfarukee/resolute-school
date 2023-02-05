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
            const res = await fetch(`http://localhost:5000/students`);
            const data = await res.json();
            return data;
        }  
    });

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, want to delete Student info?')
        if(proceed){
            fetch( `http://localhost:5000/students/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('Student info delete successfully done')
                    const remaining = allst.filter(st => st._id !== id)
                    setAllst(remaining)
                    refetch()
                    window.location.reload()
                }
            })
        }
}
    return (
        <div className='border w-full ml-5'>
            <h1>this is manage student</h1>
            <div className="overflow-x-auto p-10">
                <table className="table w-full">
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
                                <td><button><FaEdit className='text-2xl hover:text-black'></FaEdit></button></td>
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