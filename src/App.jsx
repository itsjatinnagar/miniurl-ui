import { createPortal } from "react-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Navbar from "./layouts/Navbar";
import Pricing from "./layouts/Pricing";
import Modal from "./layouts/Modal";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Pricing />
      <Footer />

      <ToastContainer />

      {true && createPortal(<Modal />, document.body)}
    </>
  );
}
