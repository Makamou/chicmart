import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { OrderContainer } from "./OrderContainer";
import "./OrdersPage.css";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/orders?expand=products").then((response) => {
  //     setOrders(response.data);
  //   });
  // }, []);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrdersData();
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <OrderContainer
                key={order.id}
                order={order}
                loadCart={loadCart}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
