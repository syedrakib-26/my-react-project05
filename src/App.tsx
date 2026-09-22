
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Card from './component/Card';
import { ToastContainer } from 'react-toastify';


function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <ToastContainer position="top-right" autoClose={2000} />

    <div className="min-h-screen bg-white px-5 py-8">
      {/* your existing code */}
    </div>

    </>
  )
}

export default App