import { createPortal } from "react-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Navbar from "./layouts/Navbar";
import Pricing from "./layouts/Pricing";
import Modal from "./layouts/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./services/reducers/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modal.isModalOpen);
  const userLoading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (userLoading) return;

  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Pricing />
      <Footer />

      <ToastContainer />

      {modalOpen && createPortal(<Modal />, document.body)}
    </>
  );
}
