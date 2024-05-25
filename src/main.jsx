// import ReactDOM object 
import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// import fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import './App.css'
import App from './App';
// page imports
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// define accessible routes
const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);