import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Form from "./pages/Form";
import Gnb from "./pages/Gnb";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import ListItem from "./pages/ListItem";
import Table from "./pages/Table";
import Modal from "./pages/Modal";
import Skeleton from "./pages/Skeleton";
import Pagination from "./pages/Pagination";
import Carousel from "./pages/Carousel";
import PracticeOne from "./pages/practices/PracticeOne";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="form" element={<Form />} />
          <Route path="gnb" element={<Gnb />} />
          <Route path="footer" element={<Footer />} />
          <Route path="login" element={<Login />} />
          <Route path="listitem" element={<ListItem />} />
          <Route path="table" element={<Table />} />
          <Route path="modal" element={<Modal />} />
          <Route path="skeleton" element={<Skeleton />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="carousel" element={<Carousel />} />
          <Route path="/practice-one" element={<PracticeOne />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
