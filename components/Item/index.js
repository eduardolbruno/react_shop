import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/CardActions';

const Item = ({ data }) => {

  return (
    <>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          image={data.imgUrl}
          alt={data.brand}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.brand}
          </Typography>
          <Typography>
            {data.model}
          </Typography>
          <Typography>
            $ {data.price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Item;