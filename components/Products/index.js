import * as React from 'react';
// import { useDispatch } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
// import styles from '../../styles/Products.module.css';
// import Item from '../Item';

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';



const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];


const Products = ({ product }) => {



  return (
    // <div className={styles}>
    // <a href={`/product/${encodeURIComponent(product.id)}`}>
    //   <Grid  container wrap="nowrap" // --> add this line to disable wrap
    //     key={product} direction="row"  spacing={8}>
    //       <Item key={product.id} data={product} />

    //   </Grid>
    // </a>

    <ImageList cols={5} gap={10}>
      {/* <ImageListItem key="Subheader" cols={5}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem> */}

      {product.map((item) => (
        <ImageListItem key={item.imgUrl}>
          <a href={`/product/${encodeURIComponent(item.id)}`}>
            <img
              src={`${item.imgUrl}?w=248&fit=crop&auto=format`}
              srcSet={`${item.imgUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.brand}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.brand}
              subtitle={item.model}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.brand}`}
                >
                  {/* <InfoIcon /> */}

                </IconButton>
              }
            />
          </a>
        </ImageListItem>
      ))}
    </ImageList>
    // </div>

  );
};

export default Products;
