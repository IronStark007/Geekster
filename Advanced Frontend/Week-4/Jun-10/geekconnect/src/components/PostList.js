import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import PostCard from './PostCard';


export default function PostList(props) {
  return (
      <Stack spacing={2} mt={4} mb={4} alignItems="center">
        {props.posts.map((post,idx)=>{
            return (
                <PostCard post={post} key={idx}/>
            )
        })}
        <Button variant="text" onClick={props.loadMore}>Load More...</Button>

      </Stack>
  );
}
