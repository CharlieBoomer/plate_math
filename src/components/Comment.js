const Comment = ({comments}) => {
    return ( 
    <div className="bg-primary p-2 m-3" style={{borderRadius: '10px'}}>
        <h5>{comments.name} says:</h5>
        <p>{comments.text}</p>
    </div> );
}
 
export default Comment;