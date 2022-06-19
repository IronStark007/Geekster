import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function HomeTopCard() {
  return (
      <Card variant="outlined" sx={{maxWidth:520,margin:"auto",marginTop:"2rem"}}>
    <CardContent>
      <Typography variant="h4" color="text.secondary" gutterBottom>
        Hii, 👋
      </Typography>
      <Typography variant="h5" component="div">
        Welcome to GeekConnect
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        Love Animals ❣️
      </Typography>
    </CardContent>
      </Card>
  );
}
