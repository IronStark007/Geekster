import Stack from '@mui/material/Stack';
import CardSingle from './CardSingle';


export default function CardList(props) {
  return (
      <Stack spacing={2} mt={4} mb={4} alignItems="center">
        {props?.cardList?.map((_,idx)=>{
                return (
                    <CardSingle key={idx}/>
                )
            })}
      </Stack>
  );
}
