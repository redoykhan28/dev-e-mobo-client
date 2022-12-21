import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // use aos
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
