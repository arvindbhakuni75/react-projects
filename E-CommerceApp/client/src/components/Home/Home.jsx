import { useEffect, useContext } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import { fetchDataFormApi } from "../../utils/api";
import { Context } from "../../utils/context";
import "./Home.scss";

const Home = () => {
  const { categories, setCategories, products, setProducts } = useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
    // eslint-disable-next-line
  }, []);

  const getProducts = () => {
    fetchDataFormApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res)
    });
  };

  const getCategories = () => {
    fetchDataFormApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res)
    });
  };

  return (
    <>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories = {categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </>
  );
};

export default Home;
