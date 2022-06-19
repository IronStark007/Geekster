import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import HomeTopCard from "../components/HomeTopCard";
import PostList from "../components/PostList"
import { api } from "../components/utils";


export const Home = () => {
    const [posts,setPosts] = useState([]);
    const [pgNo, setPgNo] = useState(0);

    const loadPage = async() => {
        const response = await api.get(`/post?page=${pgNo}`);
            const postArr = response?.data?.data ?? []
            setPosts(oldArr=>[...oldArr,...postArr]);
            setPgNo(p=>p+1);
    }

    
    useEffect(()=> {  
        loadPage();  // eslint-disable-next-line
    },[]); 

    const loadMore = () => {
        loadPage()
    }
    return (<>
        <HomeTopCard/>
        <Container fixed>
            <PostList posts={posts} loadMore={loadMore}/>
        </Container>
    </>)
}