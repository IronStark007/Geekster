import Stack from '@mui/material/Stack';
import ArticleCard from './ArticleCard';


export default function ArticleList(props) {
  return (
      <Stack spacing={2} mt={4} mb={4} alignItems="center">
        {props.articleList.map((article,idx)=>{
            return (
                <ArticleCard article={article} key={idx}/>
            )
        })}

      </Stack>
  );
}
