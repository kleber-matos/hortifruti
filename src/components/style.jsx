/** @format */

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        color: white;
    }

    body{
        background-color: #F66000;
    }

`;

export const Container = styled.section`
  border: solid 2px red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

export const Produtos = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    font-size: 4rem;
    text-align: center;
    width: 40%;
  }

  h2 {
    font-size: 3rem;
  }
`;

export const Imagens = styled.figure`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 20%;
    margin: 0.5rem;
  }
`;

export const ContainerCarrinho = styled.div`
  background-color: #f7e0ce;
  border-radius: 60px;
  width: 20%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Carrinho = styled.div`
  background-color: #d3c5bb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 80%;
  height: 50%;
  background-image: url("");

  img {
    width: 30%;
  }
  p {
    width: 50%;
    text-align: center;
    color: black;
  }
`;

export const Quantidade = styled.div`
  width: 50%;
  height: 10%;
  background-color: #d3c5bb;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  padding: 0.5rem;
  button {
    color: black;
    border: solid;
    border-radius: 100%;
    width: 25%;
    font-weight: bolder;
    background-color: #d3c5bb;
    cursor: pointer;
  }
`;
