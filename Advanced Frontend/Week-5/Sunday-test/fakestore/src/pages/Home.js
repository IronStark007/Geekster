import { useEffect, useState } from "react"
import ProductList from "../components/ProductList"
import { fakeStoreAPI } from "../utils";

export const Home = (props) => {
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        fakeStoreAPI.get('/products').then(res=>setProductList(res.data))
    },[])
    return (
        <>
        <ProductList products={productList}/>
        </>
    )
}