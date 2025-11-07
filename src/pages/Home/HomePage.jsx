import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  //fetch the data from the database
  // fetch("http://localhost:3000/api/products ").then((response) => {
  //   response.json().then((data) => {
  //     console.log(data);
  //   });
  // });

  // ///similar
  // fetch("http://localhost:3000/api/products ")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  //with axios
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  // //Help us control when the following code runs
  // useEffect(() => {
  //   // axios.get("http://localhost:3000/api/products ").then((response) => {
  //   axios.get("/api/products").then((response) => {
  //     //vite short cut (configure vite after)
  //     setProducts(response.data);
  //   });
  //   //.then() wait for a promise to finish
  // }, []); //dependancy array: lets us control when useEffect runs [] (only run once)

  useEffect(() => {
    const getHomeData = async () => {
      // const response = await axios.get("/api/products");
      const urlPath = search
        ? `/api/products?search=${search}`
        : "/api/products";
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };
    getHomeData();
  }, [search]);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="./images/home-favicon.png" />
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
