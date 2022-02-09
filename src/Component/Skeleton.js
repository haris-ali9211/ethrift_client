import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1} className="p-3">
      <Skeleton variant="rectangular" width={290} height={218} />
      <Skeleton variant="text" width={290}  />
      <Skeleton variant="text" width={90}  />
      <Skeleton variant="circular" width={40} height={40} />
    </Stack>
  );
}