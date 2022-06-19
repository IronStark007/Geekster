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


export default function PostCard(props) {
  return (
    <Card sx={{ maxWidth: 520 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.post?.owner?.picture}/>
        }
        title={`${props.post?.owner?.firstName} ${props.post?.owner?.lastName}`}
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
        {props.post?.tags?.map((tag,idx)=>{
            return <Chip variant="outlined" label={`#${tag}`} key={idx} size="small" style={{textTransform:"capitalize"}} onClick={_=>{}} />
        })}
      </Stack>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="caption" display="block" gutterBottom>{props.post?.likes} Likes</Typography>
        <IconButton aria-label="add comments" sx={{marginLeft:'auto'}}>
          <CommentIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
