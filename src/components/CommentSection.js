import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

const CommentSecion = () => {
    return ( 
        <div id ="Comments">
            <h2 className="text-secondary fw-bold text-center">Leave a Comment</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Leave your Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write your comment</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Comment"/>
                </Form.Group>
            </Form>

        </div>
     );
}
 
export default CommentSecion;