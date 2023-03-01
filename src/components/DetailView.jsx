import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductHandler from '../Handler/ProductHandler';
import { Link } from 'react-router-dom';
import StockCounter from '../components/StockCounter'
import './DetailView.css'
import '../../src/index.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DetailedView() {
  const {id} = useParams();
  const [product, setProduct] = useState([null])
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      
  const { name, price, img, category, productStatus, unit, description, date } = product;

  return (
    <div id='card'>
    <Card sx={{ margin: '1rem', marginLeft: '18rem', height: '80vh', fontFamily: 'Goldman', textAlign:'center' , padding: '2rem', width: '70vw', fontFamily: 'Goldman', alignItems:'center', display: 'grid', gridTemplateColumns: '0.8fr 3fr' }}>
        <div>
        <CardHeader style={{borderRadius:'10px', backgroundColor: '#D7C9F0', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2vh'}}
        /* avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        } */
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={name}
        subheader={date}
        />
        <CardMedia className='imgProduct'
        component="img"
        height="500"
        image={img}
        alt={name}
        />
        <CardContent>
        <Typography style={{color: '#D7C9F0', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2vh'}} variant="body2" color="text.secondary">
            Categoría del producto: {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Estado del producto: {productStatus}
        </Typography>
        </CardContent>
        </div>
        <div>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
            <ShareIcon />
        </IconButton>
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
            <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography paragraph><h2 style={{fontSize: 'xx-large', color: '#D7C9F0', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2vh'}}>Descripción</h2></Typography>
            <Typography paragraph>
            {description}
            </Typography>
            <Typography paragraph>
            <h2 style={{fontSize: 'xx-large', color: '#D7C9F0', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2vh'}}>Precio del producto: {price} €</h2>
            </Typography>
            <Typography>
            <StockCounter />
            </Typography>
            </CardContent>
        </Collapse>
        </div>
        
    </Card>
    <div id='buttonBack'>
        <Link to="/" className="nav--item"><input id="back" type="button" value="VOLVER" /></Link>
    </div>
    </div>
    );
}