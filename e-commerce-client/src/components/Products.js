import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    }; 
    getProducts();
  });


  return (
    <Container>
      {products
            .slice(0, 10)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;