import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <div
      component="form"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
}