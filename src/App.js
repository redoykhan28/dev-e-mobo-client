import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
