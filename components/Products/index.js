import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Products = ({ product }) => {

  return (
   
    <ImageList cols={5} gap={10}>
      {product.map((item) => (
        <ImageListItem key={item.id}>
          <a href={`/product/${encodeURIComponent(item.id)}`}>
            <img
              src={item.imgUrl}
              alt={item.brand}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.brand}
              subtitle={item.model} 
            />
          </a>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Products;
