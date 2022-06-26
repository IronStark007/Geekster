import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { api } from "../utils";

export const Detail = () => {
    const {id} = useParams();
    useEffect(()=>{
        (async _ => {
            const response = await api.get(`post/${id}`);
            console.log(response.data);
        })();
    },[id])
    return (
        <>
        <div>Detail</div>
        </>
    )
}