import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import { Toaster } from 'react-hot-toast';
import AddStudent from './Components/AddStudents/AddStudent';
import Login from './Components/Login/Login';
import ManageStudent from './Components/ManageStudent/ManageStudent';
import PrivateRoute from './Private/PrivateRoute';
import StudentView from './Components/SetdentsView/StudentView';
import Edit from './Components/Edit/Edit';

function App() {

  const router = createBrowserRouter([
      {
        path: '/',
        element:<Main></Main>,
        children:[
          {
            path:'/addStudents',
            element:<PrivateRoute><AddStudent></AddStudent></PrivateRoute> 
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/manage',
            element:<PrivateRoute><ManageStudent></ManageStudent></PrivateRoute> 
          },
          {
            path:'/students/:id',
            element:<StudentView></StudentView>,
            loader:async ({params}) =>{
            return fetch(`http://localhost:5000/students/${params.id}`)
            }
          },
          {
            path:'/studentsEdit/:id',
            element:<Edit></Edit>,
            loader:async ({params}) =>{
            return fetch(`http://localhost:5000/studentsEdit/${params.id}`)
            }
          },
        ]
      }
  ])
  return (
     <div >
    <RouterProvider router={router}>

    </RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
