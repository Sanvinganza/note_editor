import { Form, Col, Row } from "react-bootstrap"
import Tag from '../TagList/Tag/Tag'
import './TagList.sass'

const TagList = () => {
    return (
        <>
            <Form className="mb-2">
                <Row>
                {
                    ["tag1","tag2","tag3"].map((tagName) => {
                        return <Col><Tag text={tagName} /></Col>
                    })
                }
                </Row>
            </Form>
        </>
    )
}

export default TagList