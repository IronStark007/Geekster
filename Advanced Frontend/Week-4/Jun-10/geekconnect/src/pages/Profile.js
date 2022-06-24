import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PostList from "../components/PostList";
import { ProfileDetail } from "../components/ProfileDetail";
import { api } from "../utils";

export const Profile =() => {
    const {id} = useParams();
    const [posts,setPosts] = useState([]);
    const [details,setDetails] = useState([]);
    const [pgNo, setPgNo] = useState(0);

    useEffect(()=>{
        (async() =>{
            const response = await api.get(`/user/${id}`);
            setDetails(response.data);
        })();
        (async() =>{
            const response = await api.get(`/user/${id}/post`);
            setPosts(response.data.data);
            setPgNo(1);
        })();
    },[id])

    const loadMore = async() => {
        const response = await api.get(`/user/${id}/post?page=${pgNo}`);
            const postArr = response?.data?.data ?? []
            setPosts(oldArr=>[...oldArr,...postArr]);
            setPgNo(p=>p+1);
    }

    return (

        <Container>
        <ProfileDetail details={details}/>
        <hr/>
        <Typography variant="h6" align="center" mt={4}>All Posts</Typography>
        <PostList posts={posts} loadMore={loadMore}/>
        </Container>
    )
}