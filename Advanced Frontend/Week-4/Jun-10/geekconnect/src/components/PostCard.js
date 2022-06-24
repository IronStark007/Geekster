import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { Chip, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


export default function PostCard(props) {
  return (
    <Card sx={{ maxWidth: 520 }}>
      <CardHeader
        avatar={
          <Link to={`/profile/${props.post?.owner?.id}`}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.post?.owner?.picture} />
          </Link>
        }
        title={<Link to={`/profile/${props.post?.owner?.id}`}> {props.post?.owner?.firstName} {props.post?.owner?.lastName} </Link>}
        subheader={props.post?.publishDate}
      />
      <CardMedia
        component="img"
        image={props.post?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.post?.text}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={1} mt={1} ml={2}>
        {props.post?.tags?.map((tag, idx) => {
          
          return <Link  key={idx} to={`/search/?q=${tag}`}><Chip variant="outlined" label={`#${tag}`} size="small" style={{ textTransform: "capitalize" }} onClick={_ => { }} /></Link>
        })}
      </Stack>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="caption" display="block" gutterBottom>{props.post?.likes} Likes</Typography>
        <Link to={`/post/${props.post.id}`} style={{ marginLeft: 'auto' }}>
          <IconButton aria-label="add comments">
            <CommentIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}
