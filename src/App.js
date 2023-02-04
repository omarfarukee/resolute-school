import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import { Toaster } from 'react-hot-toast';
import AddStudent from './Components/AddStudents/AddStudent';
import Login from './Components/Login/Login';
import ManageStudent from './Components/ManageStudent/ManageStudent';

function App() {

  const router = createBrowserRouter([
      {
        path: '/',
        element:<Main></Main>,
        children:[
          {
            path:'/addStudents',
            element:<AddStudent></AddStudent>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/manage',
            element:<ManageStudent></ManageStudent>
          }
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
