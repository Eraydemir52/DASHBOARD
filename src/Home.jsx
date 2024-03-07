import React, { useEffect, useState } from "react";

import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

function Home() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://localhost:44343/api/urun/witurun");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (productId) => {
    const product = data.find((item) => item.urunID === productId);
    if (product) {
      const newCartItem = {
        id: product.urunID,
        name: product.baslik,
        price: product.fiyat,
      };
      setCart([...cart, newCartItem]);
      console.log(`Ürün ID ${productId} sepete eklendi.`);
    }
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>
      User
      <div className="table-container">
        {/* Table */}
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.urunID}>
                <td>{item.urunID}</td>
                <td>{item.baslik}</td>
                <td>{item.icerik}</td>
                <td>{item.fiyat}</td>
                <td>{item.urundurum}</td>
                <td>
                  <button
                    className=" addToCartBtn"
                    onClick={() => addToCart(item.urunID)}
                  >
                    Sepete Ekle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Home;
