import { Typography } from "@mui/material";
import { useState } from "react"
import CardList from "../components/CardList"
import { fakeStoreAPI } from "../utils";

export const Carts = () => {
    const [cardList,setCardList] = useState([]);
    useState(()=>{
        fakeStoreAPI.get('/carts').then(res=>setCardList(res.data));
    },[])
    return (
        <>
        <Typography variant="h5" m={2}>Card is Empty</Typography>
        <CardList cardList={cardList}/>
        </>
    )
}