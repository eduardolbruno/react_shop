import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Products.module.css';
import Header from '../Header';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/CardActions';
import Button from '@mui/material/CardActions';

const Item = ({ data }) => {

  return (
    <>
      {/* <Image src={data.imgUrl} height={300} width={220} />
      <h4 className={styles.title}>{data.brand}</h4>
      <h5 className={styles.category}>{data.model}</h5>
      <p>$ {data.price}</p> */}

      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            // pt: '56.25%',
          }}
          image={data.imgUrl}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.brand}
          </Typography>
          <Typography>
            {data.model}$ {data.price}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions> */}
      </Card>
    </>
  );
};

export default Item;