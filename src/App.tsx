import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Post from './pages/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'post/:id', element: <Post /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
