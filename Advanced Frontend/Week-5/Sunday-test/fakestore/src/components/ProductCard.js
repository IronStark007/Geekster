import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Chip } from '@mui/material';
import { useNavigate } from "react-router-dom";


export default function ProductCard(props) {
  const [addCard,setAddCart] = React.useState(false);

  const navigate = useNavigate();
    const click = ()=> {
        navigate("/carts")
    }

  const changeCardStatus = () => {
      if (addCard) {
        setAddCart(false)
      }else {
        setAddCart(true)
      }
  }
  return (
    <Card sx={{maxWidth:320}}>
      <CardHeader
        title={props.product?.title}
        subheader={props.product?.category}
      />
      <CardMedia
        component="img"
        image={props.product?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body3" color="text.secondary" noWrap>
        {props.product?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to carts"  onClick={changeCardStatus}>
          {addCard ? (
            <RemoveShoppingCartIcon />
          ): <AddShoppingCartIcon/>
          } 
        </IconButton>
        <Typography >
           $ {props.product?.price}
        </Typography>
        <Typography ml={2} >
           ratings: {props.product?.rating?.rate}
        </Typography>
        <Chip sx={{marginLeft:"auto", backgroundColor:"yellow"}} label="Go to Cart" variant="outlined" onClick={click} />
      </CardActions>
    </Card>
  );
}
