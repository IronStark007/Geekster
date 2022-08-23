import { Container, LinearProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import PostList from "../components/PostList"
import SearchTopCard from "../components/SearchTopCard";
import { api } from "../utils";


export const Search = () => {
    const [posts, setPosts] = useState([]);
    const [pgNo, setPgNo] = useState(0);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();


    useEffect(() => {
        setPosts([]);
        (async _ => {
            if (searchParams.has('q')) {
                const response = await api.get(`/tag/${searchParams.get("q")}/post`);
                const postArr = response.data.data;
                setPosts(postArr);
                setPgNo(1);
            } else {
                navigate("/")
            }
        })();

    }, [searchParams, navigate]);


    const loadMore = async () => {
        const response = await api.get(`/tag/${searchParams.get("q")}/post?page=${pgNo}`);
        const postArr = response?.data?.data ?? []
        setPosts(oldArr => [...oldArr, ...postArr]);
        setPgNo(p => p + 1);
    }
    return (<>
        <Container fixed>
            <SearchTopCard query={searchParams.get('q')} />
            {posts.length === 0 ? (<LinearProgress style={{margin: "1.5rem 0.75rem 1.5rem 0.75rem"}} />) : (<PostList posts={posts} loadMore={loadMore} />)}
        </Container>
    </>)
}