import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import SideMenu from './Components/Sidemenu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import KnowledgeCenter from './Pages/KnowledgeCenter';
import Breadcrumb from './Components/Breadcrumb';
import SocialMediaPage from './Pages/SocialMediaPage';
import CreateSummary from './Pages/CreateSummary';
import Issues from './Pages/Issues';
import Location from './Pages/Location';
import SourceUrl from './Pages/SourceUrl';
import Loader from './Components/Loader';
import { useEffect } from 'react';
// import axios from 'axios'
const AppLayout = () => {
  
  

  const [loading, setLoading] = useState(true);
  const location = useLocation(); // To track location changes

  useEffect(() => {
    // Whenever the location (URL path) changes, start the loader
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Stop loader after 1.2 seconds
    }, 1200);

    // Cleanup timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, [location]); // Run the effect whenever location changes

  return (
    <div className="flex">
      <SideMenu />
      <div className="w-full">
        <Breadcrumb />
        
        {loading ? (
          <Loader /> // Show loader while loading is true
        ) : (
          <Outlet /> // Render content after loading is false
        )}
      </div>
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    children: [
      {
        path: "/",
        element: <KnowledgeCenter/>,
      },
      {
        path: "/SocialMediaPage",
        element: <SocialMediaPage />,
      },
      {
        path: '/Issues',
        element: <Issues />,
      },
      {
        path: '/location',
        element: <Location />,
      },
      {
        path: '/source',
        element: <SourceUrl />,
      },
      {
        path: "/CreateSummary",
        element: <CreateSummary />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    
    
    </>
  );
};

export default App;
