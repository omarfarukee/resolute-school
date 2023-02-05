import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaUserCheck } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {

    const {signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Login Successfully')
                navigate('/addStudents');
                
            })
            .catch(error => {
                console.log(error.message)
            });
    }

    return (
        <div className='text-center border-l-4 w-full mt-10 ml-5 items-center '>
            <div className='flex justify-center'>
                <h1 className='text-2xl text-red-500 font-bold'><span className='flex items-center'>Please Login First<FaUserCheck className='ml-3'></FaUserCheck></span></h1>
            </div>
           
            <div className='mt-24 flex justify-center w-full'>
                <div className='w-96 shadow-2xl p-16 rounded-3xl'>
                    <button onClick={handleGoogle} className='btn btn-primary'> <span className='pr-2'> </span><FcGoogle className='mr-2 text-2xl'></FcGoogle> Login With Google</button>
                </div>
                
            </div>
        </div>
    );
};

export default Login;