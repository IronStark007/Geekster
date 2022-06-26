import { useEffect, useState } from "react"
import ArticleList from "../components/ArticleList";
import { newsApi } from "../util";

export const Home = () => {
    const [articleList, setArticleList] = useState([]);

    useEffect(()=>{
        (async _ => {
            const response = await newsApi.get(`everything/?q=latest`);
            setArticleList(response.data.articles);
        })();
    },[])
    return (
        <ArticleList articleList={articleList}/>
    )
}