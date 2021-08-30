import Note from './Note/Note'
import NewNote from './NewNote/NewNote'
import { Form, Row, Col } from 'react-bootstrap'
import './NoteList.sass'

const NoteList = () => {
    return (
        <>
            <div className="container-sm note-list">
                <Form className="mb-3">
                    <Row xs={1} md={2} className="g-4">
                        <Col><NewNote/></Col>
                        {
                            [1,2,3,4].map((noteNumber) => {
                                return <Col><Note noteNumber={noteNumber}/></Col>
                            })
                        }
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default NoteList