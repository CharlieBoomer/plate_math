
import Comment from "./Comment";

const Comments = ({comments}) => {
    return ( 
    <>
        {comments.map((comments)=>(
            <Comment comments={comments}/>
        ))}
    </> );
}
 
export default Comments;