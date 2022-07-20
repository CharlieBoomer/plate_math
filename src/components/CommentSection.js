import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Comments from "./Comments";

const CommentSecion = ({langauge}) => {
    const [comments,setComments] = useState([
        {
            id:1,
            text: "I love this site",
            name: "Vlad"
        },
        {
            id:2,
            text: "I hate this site",
            name:'Max'
        }
    ]
    );
    const[name,setName]= useState('');
    const[text,setText]=useState('');
    const addComment =(comment)=>{
        comments.forEach(test)
        console.log(comment);
        const id = Math.floor(Math.random() * 10000) + 1
        const newComment = {id, ...comment}
        setComments([...comments, newComment])
      }
    function test (comment){
        console.log(comment.text)
        console.log(comment.name)
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert('Please fill comment field and name field.')
            return
        }
        console.log(name)
        console.log(text)
        addComment({text,name})
        setText('')

    }
    return ( 
        <div id ="Comments">
            <h2 className="text-secondary fw-bold text-center">{langauge?"Оставить комментарий":'Leave a Comment'}</h2>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{langauge?"Оставьте свое имя":'Your Name'}</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{langauge?"Напишите свой комментарий":'Write your comment'}</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Comment" value={text} onChange={(e)=>setText(e.target.value)}/>
                </Form.Group>
                
                <Button variant="secondary" type="submit">Submit</Button>
            </Form>
            <h2 className="text-secondary fw-bold text-center">{langauge?"усер комментарий":'User Comments'}</h2>
         <Comments comments={comments}/> 
        </div>
     );
}
 
export default CommentSecion;