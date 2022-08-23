import { Comment } from "./Comment"

export const CommentList = ({comments}) => {

    return (<>
    {comments?.map((comment,idx)=>{
        return (<Comment comment={comment} key={idx}/>)
    })}
    </>)
}