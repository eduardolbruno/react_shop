// PLP - Product List Page

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Products from '../components/Products'
import { getProducts } from './api/products/index';
import axios from "axios";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const ShopPage = ({ products }) => {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      {/* <div className={styles.cards}> */}
      {/* Hero unit */}
     

      <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          {/* <Grid container spacing={4}> */}
          {/* {products.map((product) => ( */}

            <Products product={products} /> 
              
            {/* ))} */}
          {/* </Grid> */}
         </Container>

         
      {/* </div> */}
    </div>
  )
}

export default ShopPage;

export const getStaticProps = async () => {
  const products = await axios.get("https://front-test-api.herokuapp.com/api/product");

  return { props: { products: products.data } };
}