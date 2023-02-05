import React, { useContext, useState } from 'react';
import { FaBeer, FaBuffer, FaUser, FaUserCheck, FaUsers } from 'react-icons/fa';
import { FiLogOut} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
const Header = () => {
    const {logOut, user} = useContext(AuthContext)
    
    const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch(error => console.error(error))
      
      }
        const [color1, setColor1] = useState('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        const [color2, setColor2] = useState('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        const [color3, setColor3] = useState('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        // const [color4, setColor4] = useState('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')

        const addColor1 = () =>{
            const yellow1 = 'p-3 w-full border rounded-2xl bg-yellow-500 mt-3'
            setColor1(yellow1)
            setColor2('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            setColor3('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            // setColor4('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        }
        const addColor2 = () =>{
            const yellow2 = 'p-3 w-full border rounded-2xl bg-yellow-500 mt-3'
            setColor2(yellow2)
            setColor1('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            setColor3('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            // setColor4('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        }
        const addColor3 = () =>{
            const yellow3 = 'p-3 w-full border rounded-2xl bg-yellow-500 mt-3'
            setColor3(yellow3)
            setColor1('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            setColor2('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            // setColor4('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        }
        // const addColor4 = () =>{
        //     const yellow4 = 'p-3 w-full border rounded-2xl bg-yellow-500 mt-3'
        //     setColor4(yellow4)
        //     setColor2('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        //     setColor3('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        //     setColor1('w-full p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        // }
    return (
        <div>
            
            <div className='w-52 grid grid-cols-1 pl-2 mt-32 pt-16 pb-32'>
              <Link to='/addStudents'><button onClick={addColor1} className={color1}><span className='flex justify-center items-center'><FaUsers className='text-2xl mr-2'></FaUsers>Add Student</span> </button></Link>
             <Link to='/manage'> <button onClick={addColor2} className={color2}><span className='flex justify-center items-center'><FaBuffer className='text-2xl mr-2'></FaBuffer> Manage Student</span></button></Link>  
             {
                user?.uid ? <button onClick={handleLogOut} className='btn btn-outline w-48 btn-warning mt-3 ml-2'><span className='flex justify-center items-center'><FiLogOut className='text-2xl mr-2'></FiLogOut> Log-Out</span></button> 
                :<Link to='/login'><button onClick={addColor3} className={color3}> <span className='flex justify-center items-center'><FaUserCheck className='text-2xl mr-2'></FaUserCheck> Log-in</span></button></Link> 
             } 
               
               
            </div>
        </div>
    );
};

export default Header;