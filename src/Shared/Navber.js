import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider';
// import {logos} from '../images/pngwing.com.png'
const Navber = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-yellow-500 flex justify-between">
                <div>
                    <a className="btn btn-ghost normal-case text-xl">Resolute-school</a>
                   {/* <a><img src={logos} className='w-9 rounded-full mr-2'/></a>  */}
                </div>
                

                {
                    user?.uid ? 
                    <span className='font-bold mr-10 border w-96 p-3 rounded-2xl pl-10'> {user?.photoURL ? <img src={user?.photoURL} className='w-9 rounded-full mr-2'/> : <FaUserCircle className='text-2xl mr-2'></FaUserCircle>} {user?.email} 
                   </span>:
                    
                 <span className='font-bold mr-10 border w-72 p-3 rounded-2xl pl-20'><FaUserCircle className='text-2xl mr-2'></FaUserCircle> 'user not log-in'</span>
                }
            </div>
        </div>
    );
};

export default Navber;