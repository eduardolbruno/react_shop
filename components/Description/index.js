import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import styles from '../../styles/Products.module.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Description = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [color, setColor] = React.useState('');
  const [storage, setStorage] = React.useState('');

  const handleChangeStorage = (event) => {
    setStorage(event.target.value);
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  return (
    // <div className={styles}>
    //   <Image src={product.image} height={300} width={220} />
    //   <h4 className={styles.title}>{product.product}</h4>
    //   <h5 className={styles.category}>{product.category}</h5>
    //   <p>$ {product.price}</p>
    //   <button className={styles.button}>Add to Cart</button>
    // </div>

    <Grid item xs={12} sm container>
          <Grid item xs p={5} container direction="column">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                {data.brand} - {data.model}
              </Typography>
              <Grid item>
                <Typography gutterBottom variant="h5" component="div">
                  $ {data.price}
                </Typography>
              </Grid>
              <Typography variant="subtitle2" color="text.secondary">
                Peso: {data.weight} gr.
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Medidas: {data.dimentions}
              </Typography>

              <Grid container p={2}>
                <Grid item xs={6}>
                  <FormControl sx={{ m: 1 }}>
                    <InputLabel variant="subtitle2" id="labelStorage">Memoria</InputLabel>

                    <NativeSelect
                      id="selectStorage"
                      value={storage} autoWidth
                      onChange={handleChangeStorage}
                      labelId="labelStorage"
                    >
                      {data.options.storages.map((a) => (
                        <option key={a.code} value={a.code}>{a.name}</option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>


                  <FormControl sx={{ m: 1 }}>
                    <InputLabel variant="standard" id="labelColor">Color</InputLabel>

                    <NativeSelect
                      id="selectColor"
                      value={color} autoWidth
                      onChange={handleChangeColor}
                      labelId="labelColor"
                    >
                      {data.options.colors.map((a) => (
                        <option key={a.code} value={a.code}>{a.name}</option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item justifyItems="center">
                  <Box py={5}>
                    <Button variant="contained"
                      onClick={() => dispatch(addToCart({'id':data.id,'storageCode':selectStorage.value,'colorCode':selectColor.value}))}
                      className={styles.button}
                    >
                      Agregar al Carrito
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  );
};

export default Description;
