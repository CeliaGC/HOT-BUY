import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../../src/index.css'
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


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

function Navbar() {
  function mediaquery(){
    let mediaqueryList = window.matchMedia("(max-width: 760px)");
    if (mediaqueryList.matches){
      return(
        <div>
        <Box sx={{ flexGrow: 1, border: '#8822D8 solid 10px', width: '100vw'}}>
          <AppBar position="static" >
            <Toolbar style={{backgroundColor: '#CA9FEA', color: 'black', fontFamily: 'Goldman'}}>
            <Link className="add-link" to={`/`}><img alt="" src="../../src/assets/img/logo.png" className="d-inline-block align-top" style={{width:'3rem'}} id='logo'/></Link>
            <Link className="add-link" to={`/NewProduct`}><button className="Submit" id="add" style={{display: 'flex',flexDirection: 'row', borderRadius:'5px', backgroundColor:"#7C2E9B", color: "#E79036", fontSize:'x-small', height: '2rem', marginRight: '0.5rem', marginLeft: '0.5rem', display:'inline-block', width:'8rem'}}><AddCircleOutlineIcon style={{marginRight:'0.5rem'}}/>PRODUCTO</button></Link>
            {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
            </Toolbar>
          </AppBar>
        </Box>
        </div>
      )}else{
        return(
          <div>
          <Box sx={{ flexGrow: 1, border: '#8822D8 solid 10px', width: '100vw',}}>
          <AppBar position="static" >
            <Toolbar style={{backgroundColor: '#CA9FEA', color: 'black', fontFamily: 'Goldman'}}>
            <Link className="add-link" to={`/`}><img alt="" src="../../src/assets/img/logo.png" className="d-inline-block align-top" style={{width:'6rem'}} id='logo'/></Link>
            <Link className="add-link" to={`/NewProduct`}><button className="Submit" id="add" style={{display: 'flex',flexDirection: 'row', borderRadius:'5px', backgroundColor:"#7C2E9B", color: "#E79036", fontSize:'large', height: '3rem', marginRight: '3rem', marginLeft: '3rem', display:'inline-block', width:'12rem'}}><AddCircleOutlineIcon style={{marginRight:'0.5rem'}}/>PRODUCTO</button></Link>

            {/* <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                style={{width:'30rem'}}
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
            </Toolbar>
          </AppBar>
        </Box>
        </div>
        )}
        }
    return(
      <div>
        {mediaquery()}
      </div>
    )
}

export default Navbar;