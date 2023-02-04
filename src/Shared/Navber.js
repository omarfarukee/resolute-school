import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider';

const Navber = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-base-300 flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Resolute-school</a>

                {
                    user?.uid ? 
                    <span className='font-bold mr-10 border w-96 p-3 rounded-2xl pl-10'> {user?.photoURL ? <img src={user?.photoURL} className='w-10 rounded-full'/> : <FaUserCircle className='text-2xl mr-2'></FaUserCircle>} {user?.email} 
                   </span>:
                    
                 <span className='font-bold mr-10 border w-72 p-3 rounded-2xl pl-20'><FaUserCircle className='text-2xl mr-2'></FaUserCircle> 'user not log-in'</span>
                }
            </div>
        </div>
    );
};

export default Navber;