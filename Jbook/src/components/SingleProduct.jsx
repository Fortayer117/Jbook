import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useState,useEffect } from "react";
import styled from "styled-components";
import { products } from "../data";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const find = products.find((d) => d.id === +id);
    setProduct(find);
  }, []);

  const addToCartItem = () => {
    dispatch(
      addToCart({
        ...product,
        quantity,
        _id: Math.random().toString(36).slice(2, 8),
      })
    );
  };
  return (
    <>
      <Navbar />
      <Container>
        <img src={products.img} alt="" />
        <div className="content">
          <h1>Title: {products.text}</h1>
          <p>
            just testing the desc
          </p>
          <p>price:${products.price * quantity}</p>
          <div className="prices">
            <div className="left">
              <button onClick={() => handleQuantity("dec")}>-</button>
              <h3>{quantity}</h3>
              <button onClick={() => handleQuantity("inc")}>+</button>
            </div>
            <div className="right">
              <button onClick={() => addToCartItem(products.id)}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 50px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .prices {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 5px;

    button {
      padding: 5px 10px;
      border: none;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      border-radius: 4px;
    }
  }

  .right {
    button {
      padding: 5px 25px;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      border: none;
      border-radius: 4px;
    }
  }
`;
