import React from "react";
import { products , fegurines } from "../data";
import styled from "styled-components";
const Posts = () => {
  return (
    <Container>
      <h1 className="header">Manga</h1>
      <Grid>
        {products.map((e, key) => {
          return (
            <Card key={key}>
              <img src={e.img} />
              <h1>{e.text}</h1>
            </Card>
          );
        })}
      </Grid>
      <h1 className="header">Fegurines</h1>
      <Grid>
        {fegurines.map((e, key) => {
          return (
            <Card key={key}>
              <img src={e.img} />
              <h1>{e.text}</h1>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Posts;
const Container = styled.div`
  padding: 50px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;

  .header {
    text-align: center;
    position: relative;
  }

  .header::after {
    content: "";
    position: absolute;
    top: 125%;
    left: 48%;
    width: 5%;
    height: 3px;
    background-color: #ff0000;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 350px);
  gap: 40px;
  width: 100%;
  margin: 0 auto;
`;
const Card = styled.div`
  cursor: pointer;
  width: 300px;
  
  display: flex;
  flex-direction: column;
  border-radius:20px;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 4px 35px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 4px 35px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 4px 35px -4px rgba(0, 0, 0, 0.75);

  img {
    width: 100%;
    :hover{
  animation: pop 0.8s linear 1;
}
    @keyframes pop {
      50% {
        transform: scale(1.2);
      }
    }
  }
  h1 {
    font-family: "Asap Condensed", sans-serif;
  }
`;
