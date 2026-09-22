import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";
import Bottom from "./component/Bottom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <ToastContainer position="top-right" autoClose={50} />

      <Footer />
      <Bottom/>
    </>
  );
}

export default App;
