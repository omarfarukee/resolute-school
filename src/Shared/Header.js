import React, { useContext, useState } from 'react';
import { FaBeer, FaUser, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
const Header = () => {
    const {logOut, user} = useContext(AuthContext)
    
    const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch(error => console.error(error))
      
      }
        const [color1, setColor1] = useState('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        const [color2, setColor2] = useState('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        const [color3, setColor3] = useState('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        const [color4, setColor4] = useState('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')

        const addColor1 = () =>{
            const yellow1 = 'p-3 w-40 border rounded-2xl bg-yellow-500 mt-3'
            setColor1(yellow1)
            setColor2('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            setColor3('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            setColor4('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        }
        const addColor2 = () =>{
            const yellow2 = 'p-3 w-40 border rounded-2xl bg-yellow-500 mt-3'
            setColor2(yellow2)
            setColor1('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            setColor3('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            setColor4('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        }
        const addColor3 = () =>{
            const yellow3 = 'p-3 w-40 border rounded-2xl bg-yellow-500 mt-3'
            setColor3(yellow3)
            setColor1('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            setColor2('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
            setColor4('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        }
        // const addColor4 = () =>{
        //     const yellow4 = 'p-3 w-40 border rounded-2xl bg-yellow-500 mt-3'
        //     setColor4(yellow4)
        //     setColor2('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        //     setColor3('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        //     setColor1('w-40 p-3 border rounded-2xl mt-3 hover:bg-gray-100')
        // }
    return (
        <div>
            
            <div className='w-72 grid grid-cols-1 w-40 pl-2 mt-32'>
              <Link to='/addStudents'><button onClick={addColor1} className={color1}><span className='flex justify-center items-center'><FaUsers></FaUsers>Add Student</span> </button></Link>
             <Link to='/manage'> <button onClick={addColor2} className={color2}> Manage Student</button></Link>  
             {
                user?.uid ? <button onClick={handleLogOut} className='btn btn-outline w-40 btn-warning mt-3 ml-2'> Log-out</button> 
                :<Link to='/login'><button onClick={addColor3} className={color3}> Log-in</button></Link> 
             } 
               
               
            </div>
        </div>
    );
};

export default Header;