import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {useLoaderData } from "react-router-dom";
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.category,
});

export default function Filter() {
  return (
    <Autocomplete
      id="filter"
      options={product}
      getOptionLabel={(option) => option.category}
      filterOptions={filterOptions}
      sx={{ width: 230, backgroundColor:"#7C2E9B", color: "#E79036" }}
      renderInput={(params) => <TextField {...params} label="BUSCAR PRODUCTO" />}
      
    />
  );
}

const product = [
  { category: 'Bebe' },
  { category: 'Moda' },
  { category: 'Complementos' },
  { category: 'Mobiliario' },
  { category: 'Menaje' },
  { category: 'Deporte' },
  { category: 'Tecnología' },
];


