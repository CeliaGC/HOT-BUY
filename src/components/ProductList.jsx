import { useState, useEffect } from "react";
import ProductHandler from "../handler/productHandler";
import {Link} from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AspectRatio from "@mui/joy/AspectRatio";
import Grid from '@mui/material/Unstable_Grid2';
import {Box} from "@mui/joy";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { purple, orange } from '@mui/material/colors';
import Up_here from './Up_here'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function ProductList() {

  const [products, setProducts] = useState([]);
  const [searchValues, setSearchValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  console.log({searchValue});

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let filteredProducts = products.filter(product => {
      let matchSearchValue = product.name.toLowerCase().includes(searchValue);
      let matchCheckboxValue = true;
      
      if (searchValues.length > 0) {
        matchCheckboxValue = searchValues.includes(product.productStatus); 
      }
      if (searchValues.length === 0) {
        return matchSearchValue;
      } 
      else {
        return matchSearchValue && matchCheckboxValue;
      }
    });
  
    setFilteredProducts(filteredProducts);
  }, [products, searchValue, searchValues]);
  
  

  const getData = async () => {
    const data = await ProductHandler.loadProducts();
    setProducts(data);
  };

  const deleteShort = async (id) => {
    setProducts(products.filter((p) => p.id !== id));
    await ProductHandler.deleteProduct(id);
  };

  const handleCheckBox = (event) => {
    let searchInput = event.target.value;

    const isChecked = event.target.checked;

    if (isChecked) {
      setSearchValues([...searchValues, searchInput]);
    } else {
      setSearchValues(searchValues.filter(val => val !== searchInput));
    }
  }

  const handleSearch = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  }

  console.log({filteredProducts})
    
      if(searchValues.length !== 0 || searchValue.length !== 0){
        return (



            <>
              <div style= {{display:"flex", flexDirection:"row", justifyContent: "center", height: 50, }}>

                <div style= {{borderBottom:"1px solid orange", paddingTop: 10, width: "25%", height:"100%", justifyContent:"center", alignContent: "center", backgroundColor: purple[50], justifyContent:"space-evenly"}}>
                    <p>MOSTRAR</p>
                </div>
                        
                <div style={{paddingTop:10, width: "25%", height:"100%", display:"flex", flexDirection:"row", backgroundColor: purple[400], borderRadius:5, borderBottom: "solid 3px orange", justifyContent:"space-evenly" }}>
                    <label style={{ fontFamily: "Goldman", margin:0}}>Nuevo</label>
                    <input  style={{margin: 0, paddingBottom: 10, width: 25}} type="checkbox" onChange={handleCheckBox} value="Nuevo" />
                </div>
                        
                <div style={{paddingTop:10, width: "25%", height:"100%", display:"flex", flexDirection:"row", backgroundColor: purple[300], borderRadius:5, borderBottom: "solid 3px orange", justifyContent:"space-evenly"}}>
                    <label style={{fontFamily: "Goldman", margin:0}}>Semi</label>
                    <input style={{margin: 0, paddingBottom:10, width: 25}} type="checkbox" onChange={handleCheckBox} value="Semi-nuevo"/>
                </div>
                        
                <div style={{paddingTop:10, width: "25%", height:"100%", display:"flex", flexDirection:"row", backgroundColor: purple[200], borderRadius:5, borderBottom: "solid 3px orange", justifyContent:"space-evenly"}}> 
                    <label style={{fontFamily: "Goldman", margin:0}}>Usado</label>
                    <input style={{margin: 0, paddingBottom:10, width: 25}} type="checkbox" onChange={handleCheckBox} value="Usado" />
                </div>    
                        
                </div>
                <div className="block--search-container">
                    <Search >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            onChange={handleSearch}
                            style={{width:'30rem'}}
                            placeholder="Buscar..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    </div>         

                <Up_here />             

            <Grid container bgcolor="rgba(248, 241, 241, 1)" justifyContent="center" columnGap={5} rowGap={5} paddingBottom={10} width={'100%'}> 
        
            {
                filteredProducts.map(item =>(

                (<div id="productShort" key={item.id}>


                    <Card variant="elevation" sx={{ width: 360}}>
                        <Typography color={"white"}  bgcolor={purple[700]} fontFamily={'Goldman'} level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                            {item.name}
                        </Typography>


                            <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                                <img position="relative"
                                  src={item.img}
                                  loading="lazy"
                                  alt="image of the product"
                                />
                                <Typography borderRadius={1} border={'1px solid rgba(231, 144, 54, 1)'} bottom={5} right={5} width={30} bgcolor={'rgba(240, 201, 168, 1)'}  fontFamily={'Goldman'} level="h2" fontSize="md" sx={{ mb: 0.5 }} position={"absolute"}>
                                    {item.unit}
                                </Typography>

                            </AspectRatio>

                    
                        <Box sx={{ display: 'flex' }}>

                            <Link to={`/DetailedView/${item.id}`}>
                                <Button
                                    variant="solid"
                                    size="sm"
                                    color="primary"
                                    aria-label="Product Detail"
                                    sx={{ ml: 'auto', fontWeight: 600, color: purple[700] }}
                                    border= "1px solid rgba(231, 144, 54, 1)"
                                    startIcon={<ExpandMoreIcon />}>VER MÁS
                                </Button>
                            </Link>

                            <Link to={`/EditProduct/${item.id}`}>
                                <Button
                                    variant="solid"
                                    size="sm"
                                    color="secondary"
                                    aria-label="Edit"
                                    sx={{ ml: 'auto', fontWeight: 600, color: purple[700] }}
                                    startIcon={<BorderColorIcon />}>
                                </Button>
                            </Link>

                            <Button
                              variant="solid"
                              size="sm"
                              color="secondary.main"
                              aria-label="Delete"
                              sx={{ ml: 'auto', fontWeight: 600, color:  purple[700]}}
                              onClick={() => deleteShort(item.id)}
                              startIcon={<DeleteIcon />}>
                            </Button>

                        </Box>

                        <div>

                             <Typography bgcolor={orange[100]} fontWeight= {600} fontSize={25} color={purple[700]}  level="body3">
                                {item.price}€
                            </Typography>

                        </div>

                    </Card>
                </div>
                )

                ))

            }
        </Grid>

        </>
        )
      } else return (

        <>

            <div style= {{display:"flex", flexDirection:"row", justifyContent: "center", height: 50, }}>

                <div style= {{borderBottom:"1px solid orange", paddingTop: 10, width: "25%", height:"100%", justifyContent:"center", alignContent: "center", backgroundColor: purple[50], justifyContent:"space-evenly"}}>
                    <p>MOSTRAR</p>
                </div>

                <div style={{paddingTop:10, width: "25%", height:"100%", display:"flex", flexDirection:"row", backgroundColor: purple[400], borderRadius:5, borderBottom: "solid 3px orange", justifyContent:"space-evenly" }}>
                    <label style={{ fontFamily: "Goldman", margin:0}}>Nuevo</label>
                    <input  style={{margin: 0, paddingBottom: 10, width: 25}} type="checkbox" onChange={handleCheckBox} value="Nuevo" />
                </div>

                <div style={{paddingTop:10, width: "25%", height:"100%", display:"flex", flexDirection:"row", backgroundColor: purple[300], borderRadius:5, borderBottom: "solid 3px orange", justifyContent:"space-evenly"}}>
                    <label style={{fontFamily: "Goldman", margin:0}}>Semi</label>
                    <input style={{margin: 0, paddingBottom:10, width: 25}} type="checkbox" onChange={handleCheckBox} value="Semi-nuevo"/>
                </div>

                <div style={{paddingTop:10, width: "25%", height:"100%", display:"flex", flexDirection:"row", backgroundColor: purple[200], borderRadius:5, borderBottom: "solid 3px orange", justifyContent:"space-evenly"}}> 
                    <label style={{fontFamily: "Goldman", margin:0}}>Usado</label>
                    <input style={{margin: 0, paddingBottom:10, width: 25}} type="checkbox" onChange={handleCheckBox} value="Usado" />
                </div>    
 
            </div>
            <div className="block--search-container">
                    <Search >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            onChange={handleSearch}
                            style={{width:'30rem'}}
                            placeholder="Buscar..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    </div>

            <Up_here />
            
            <Grid container bgcolor="rgba(248, 241, 241, 1)" justifyContent="center" columnGap={5} rowGap={5} paddingBottom={10} width={'100%'}> 
        
                {
                    products.map(item =>(

                    (<div id="productShort" key={item.id}>


                        <Card variant="elevation" sx={{ width: 360}}>
                            <Typography color={"white"}  bgcolor={purple[700]} fontFamily={'Goldman'} level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                                {item.name}
                            </Typography>


                                <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                                    <img position="relative"
                                      src={item.img}
                                      loading="lazy"
                                      alt="image of the product"
                                    />
                                    <Typography borderRadius={1} border={'1px solid rgba(231, 144, 54, 1)'} bottom={5} right={5} width={30} bgcolor={'rgba(240, 201, 168, 1)'}  fontFamily={'Goldman'} level="h2" fontSize="md" sx={{ mb: 0.5 }} position={"absolute"}>
                                        {item.unit}
                                    </Typography>

                                </AspectRatio>
                            <Box sx={{ display: 'flex' }}>

                                <Link to={`/DetailedView/${item.id}`}>
                                    <Button
                                        variant="solid"
                                        size="sm"
                                        color="primary"
                                        aria-label="Product Detail"
                                        sx={{ ml: 'auto', fontWeight: 600, color: purple[700] }}
                                        border= "1px solid rgba(231, 144, 54, 1)"
                                        startIcon={<ExpandMoreIcon />}>
                                    </Button>
                                </Link>

                                <Link to={`/EditProduct/${item.id}`}>
                                    <Button
                                        variant="solid"
                                        size="sm"
                                        color="secondary"
                                        aria-label="Edit"
                                        sx={{ ml: 'auto', fontWeight: 600, color: purple[700] }}
                                        startIcon={<BorderColorIcon />}>
                                    </Button>
                                </Link>

                                <Button
                                  variant="solid"
                                  size="sm"
                                  color="secondary.main"
                                  aria-label="Delete"
                                  sx={{ ml: 'auto', fontWeight: 600, color:  purple[700]}}
                                  onClick={() => deleteShort(item.id)}
                                  startIcon={<DeleteIcon />}>
                                </Button>

                            </Box>

                            <div>

                                 <Typography bgcolor={orange[100]} fontWeight= {600} fontSize={25} color={purple[700]}  level="body3">
                                    {item.price}€
                                </Typography>

                            </div>

                        </Card>
                    </div>
                    )

                    ))

                }
            </Grid>

        </>
    )
}

