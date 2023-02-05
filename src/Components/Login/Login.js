import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
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
        <div className='text-center border w-full mt-10 ml-5 items-center '>
            <h1>this is login</h1>
            <div className='mt-16'>
            <button onClick={handleGoogle} className='btn btn-primary'> <span className='pr-2'> </span><FcGoogle className='mr-2 text-2xl'></FcGoogle> Login With Google</button>
            </div>
        </div>
    );
};

export default Login;