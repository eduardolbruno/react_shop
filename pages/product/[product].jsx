// PDP - Product Details Page
import * as React from 'react';
import axios from 'axios';
import api from "../../config";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Description from '../../components/Description';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  height: '100%',
});

function Product({ data }) {

  return (
    <Paper sx={{ p: 3, margin: 'auto', width: "60%", }}>
      <Grid container spacing={10}>
        <Grid item px={10}>
          <Img alt="" src={data.imgUrl} />
        </Grid>
        <Description data={data}/>
      </Grid>
    </Paper>
  )
}

export default Product;

export async function getServerSideProps(ctx) {

  const id = ctx.query.product;
  console.log(ctx)
  let url = api.api.baseUrl + `api/product/${id}`;
  const res = await axios.get(url);
  return {
    props: {
      data: res.data
    }
  };
}