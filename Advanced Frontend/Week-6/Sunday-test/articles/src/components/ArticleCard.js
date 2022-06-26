import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';


export default function ArticleCard(props) {
    const [like, setLike] = React.useState(false);
    
    const likeHandler = e => {
        if (like) {
            setLike(false);
            e.target.style.color = 'initial';
        }else {
            setLike(true);
            e.target.style.color = 'red';
        }
    }
  return (
    <Card sx={{ maxWidth: 520 }}>
      <CardHeader
        title={props.article?.title}
        subheader={props.article?.publishedAt}
      />
      <CardMedia
        component="img"
        image={props.article?.urlToImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.article?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={likeHandler}>
          <FavoriteIcon />
        </IconButton>
        <Link to={`/comment/${props.article?.source?.id}`} style={{ marginLeft: 'auto' }}>
          <IconButton aria-label="add comments">
            <CommentIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}
