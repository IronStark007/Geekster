import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import HomeTopCard from "../components/HomeTopCard";
import PostList from "../components/PostList"
import { api } from "../utils";


export const Home = () => {
    const [posts,setPosts] = useState([]);
    const [pgNo, setPgNo] = useState(0);

    
    
    useEffect(()=> {  
        (async _ => {
            const response = await api.get(`/post`);
            const postArr = response.data.data;
            setPosts(postArr);
            setPgNo(1);
        })();
    },[]); 


    const loadMore = async() => {
        const response = await api.get(`/post?page=${pgNo}`);
            const postArr = response?.data?.data ?? []
            setPosts(oldArr=>[...oldArr,...postArr]);
            setPgNo(p=>p+1);
    }
    return (<>
        <HomeTopCard/>
        <Container fixed>
            <PostList posts={posts} loadMore={loadMore}/>
        </Container>
    </>)
}