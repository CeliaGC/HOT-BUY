
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Description } from "@mui/icons-material";





function DetailView() {


    
    
    const { product } = useLoaderData();
    const id = product.id;
    const [name] = useState(product.name);
    const [price] = useState(product.price);
    const [img] = useState(product.img);
    const [category] = useState(product.category);
    const [productStatus] = useState(product.productStatus);
    const [unit] = useState(product.unit);
    const [description] = useState(product.description);
    
        return (
            <Card sx={{ maxWidth: 360}}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title={name}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productStatus}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {unit}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
        
export default DetailView
