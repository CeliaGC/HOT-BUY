import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

export default function Filter() {
  return (
    <Autocomplete
      id="filter"
      options={product}
      getOptionLabel={(option) => option.product}
      filterOptions={filterOptions}
      sx={{ width: 230, backgroundColor:"#7C2E9B", color: "#E79036" }}
      renderInput={(params) => <TextField {...params} label="BUSCAR PRODUCTO" />}
      
    />
  );
}

const product = [
  { product: 'Silla de escritorio', category: "Mobiliario oficina" },
  { product: 'Paraguas Plegable Compacto Harry Potter', category: "Accesorios" }
]
