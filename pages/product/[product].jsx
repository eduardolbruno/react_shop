// PDP - Product Details Page
import * as React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import axios from 'axios';
import api from "../../config";
import { getProductById } from '../api/products/[product]';
import styles from '../../styles/Products.module.css';
import Image from 'next/image';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function Product({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(data)
  return (
    // <div className={styles.container}>
    //   <h1 className={styles.title}>{data.brand} - {data.model}</h1>
    //   <div className={styles.cards}>
    //     <Image src={data.imgUrl} height={300} width={220} />
    //     <h1>Descripción</h1>
    //     <p>Precio: $ {data.price}</p>

    //     <p>{data.dimentions}</p>
    //     <p>{data.weight} gramos</p>
    //     <h1>Actions</h1>
    //     <p>Almacenamiento</p>

    //     <select>
    //       {data.options.storages.map((a) => (
    //         <option key={a.id} value={a.id}>{a.name}</option>
    //       ))}
    //     </select>

    //     <p>Colores</p>
    //     <select>
    //       {data.options.colors.map((a) => (
    //         <option key={a.id} value={a.id}>{a.name}</option>
    //       ))}
    //     </select>
    //     <Button variant="contained"
    //       onClick={() => dispatch(addToCart(data))}
    //       className={styles.button}
    //     >
    //       Agregar al Carrito
    //     </Button>
    //   </div>
    // </div>

    <Paper sx={{ p: 2,margin: 'auto', flexGrow: 0,maxWidth: "70%", }}>
      <Grid container spacing={2}>
        <Grid item px={5}>
          <Box >
            <Img alt="" src={data.imgUrl} />
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
                {data.brand} - {data.model}
              </Typography>

              <Typography variant="subtitle2" color="text.secondary">
                Peso: {data.weight} gr.
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Medidas: {data.dimentions}
              </Typography>

              <Grid container 
                >
                <Grid item xs={6}>
                  <FormControl sx={{ m: 1,  }}>
                    <InputLabel variant="subtitle2" id="demo-simple-select-label">Memoria</InputLabel>

                    <NativeSelect
                      id="demo-simple-select"
                      value={value} autoWidth
                      onChange={handleChange}
                      labelId="demo-simple-select-label"
                      defaultValue={30}
                    >
                      {data.options.storages.map((a) => (
                        <option key={a.id} value={a.id}>{a.name}</option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>


                  <FormControl sx={{ m: 1 }}>
                    <InputLabel variant="standard" id="demo-simple-select-label">Colores</InputLabel>

                    <NativeSelect
                      id="demo-simple-select"
                      value={value} autoWidth
                      onChange={handleChange}
                      labelId="demo-simple-select-label"
                      defaultValue={30}
                    >
                      {data.options.colors.map((a) => (
                        <option key={a.id} value={a.id}>{a.name}</option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item justifyItems="center">
                  <Box py={5}>
                    <Button variant="contained"
                      onClick={() => dispatch(addToCart(data))}
                      className={styles.button}
                    >
                      Agregar al Carrito
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div">
              $ {data.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Product;

export async function getServerSideProps(ctx) {

  const id = ctx.query.product;
  console.log(ctx)
  let url = api.api.baseUrl + `api/product/${id}`;
  // console.log(url)
  // const res =  await getProductById(id);
  const res = await axios.get(url);
  console.log(res)
  // console.log(products)
  return {
    props: {
      data: res.data
    }
  };
}