import { useState, useEffect } from "react";
import ProductHandler from "../handler/ProductHandler";
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
import { Link } from "react-router-dom"

function Filter() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log({searchValue});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await ProductHandler.loadProducts();
    setProducts(data);
  }
  const deleteProduct = async (id) => {
    await ProductHandler.deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  }
  const handleSearch = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  }
  let filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchValue);
  });
  console.log({filteredProducts});
  return (
    <div className="block--dashboard">
      <div className="block--search-container">
        <label htmlFor="">Search</label>
        <input type="input" onChange={handleSearch} value={searchValue}/>
      </div>
      <section className="block--products-container">
        {filteredProducts.map((product) => (
          (<div id="productShort" key={product.id}>
          <Card variant="elevation" sx={{ width: 360}}>
              <Typography color={"white"}  bgcolor={purple[700]} fontFamily={'Goldman'} level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                  {product.name}
              </Typography>
                  <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                      <img position="relative"
                        src={product.img}
                        loading="lazy"
                        alt="image of the product"
                      />
                      <Typography borderRadius={1} border={'1px solid rgba(231, 144, 54, 1)'} bottom={5} right={5} width={30} bgcolor={'rgba(240, 201, 168, 1)'}  fontFamily={'Goldman'} level="h2" fontSize="md" sx={{ mb: 0.5 }} position={"absolute"}>
                          {product.unit}
                      </Typography>
                  </AspectRatio>
              <Box sx={{ display: 'flex' }}>
                  <Link to={`/DetailedView/${product.id}`}>
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
                  <Link to={`/EditProduct/${product.id}`}>
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
                    onClick={() => deleteShort(product.id)}
                    startIcon={<DeleteIcon />}>
                  </Button>
              </Box>
              <div>
                   <Typography bgcolor={orange[100]} fontWeight= {600} fontSize={25} color={purple[700]}  level="body3">
                      {product.price}€
                  </Typography>
              </div>
          </Card>
      </div>
      )
        ))}
      </section>
    </div>
  )
}
export default Filter;
