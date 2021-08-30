import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import TagList from '../../TagList/TagList'
import { FloatingLabel, Form, Button, Card } from "react-bootstrap"

const Note = (props) => {
    return(
        <>
            <Card.Body className="note">
                <Card.Title>Note {props.noteNumber}</Card.Title>
                <FloatingLabel>
                    <Form.Control
                        placeholder="Leave a commet here" 
                        style={{ height: '12em', maxWidth: '90%', resize: 'none'}}
                        as="textarea"/>
                </FloatingLabel>
                <Button className="button button-edit">
                    <AiFillEdit/>
                </Button>
                <Button className="button button-delete">
                    <AiFillDelete/>
                </Button>
                <TagList/>
            </Card.Body>
        </>
    )
}

export default Note