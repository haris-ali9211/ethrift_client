import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const BasicRating = ( {rate} ) => {

  const [value, setValue] = React.useState(Math.floor(Math.random() * 4) + 1);
  // const value = React.useState(Math.floor(Math.random() * 4) + 1);
  
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <div>
      <Rating name="read-only"  value={value}  />
      </div>


    </Box>
  );
}

export default BasicRating;