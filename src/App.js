import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, useCallback, useEffect } from "react";
import Home from "./Views/Pages/Home";
import Loader from "./Views/Components/Loader";
import Navbar from "./Views/Components/Navbar";
import Footer from "./Views/Components/Footer";
import {
  getCart,
  getCategories,
  getCollectionList,
  getCustomerChoices,
  getFavouriteList,
  getReviews,
} from "./Services/JewelsService";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    dispatch(getCollectionList());
    dispatch(getFavouriteList());
    dispatch(getCustomerChoices());
    dispatch(getReviews());
    dispatch(getCategories());
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
