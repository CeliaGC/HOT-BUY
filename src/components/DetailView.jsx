import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductHandler from '../Handler/ProductHandler';
import { Link } from 'react-router-dom';
import StockCounter from '../components/StockCounter'
import './DetailView.css'
import '../../src/index.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function DetailedView() {
  const {id} = useParams();
  const [product, setProduct] = useState([null])

  useEffect(() => {
    async function fetchProduct() {
      const productData = await ProductHandler.loadProduct(id);
      setProduct(productData);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  
  const { name, price, img, category, productStatus, description, date }= product;

    let newDate=new Date(date);
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    let dateUploaded = `${day}/${month}/${year}`;

 

  return (
    <div id='card'>
        <Card sx={{ maxWidth: '80vw', margin: 'auto' }}>
      <CardActionArea style={{display: 'flex', flexDirection: 'row'}}>
        <div id='imgProdct'>
        <CardMedia style={{width:'20vw', marginRight: '3rem', padding: '1rem'}}
          component="img"
          image={img}
          alt={name}
        /></div>
        <div>
        <CardContent style={{width:'50vw'}}>
          <Typography style={{backgroundColor:'#7C2E9B', borderRadius: '5px', height: '2.4rem'}} gutterBottom variant="h5" component="div">
          <h2>{name}</h2>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          <p>{dateUploaded}</p>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          <h4>Categoría del producto: {category}</h4>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          <h4>Estado del producto: {productStatus}</h4>
          </Typography>
          <Typography  variant="body1" color="text.secondary">
          <p>{description}</p>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          <p>Precio: {price}€</p>
          </Typography>
          <Typography>
            <StockCounter />
        </Typography>
        </CardContent>
        </div>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <div id='buttonBack'>
        <Link to="/" className="nav--item"><input id="back" type="button" value="VOLVER" /></Link>
    </div>
    </div>
    );
}