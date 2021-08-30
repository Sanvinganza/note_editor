import { FormControl, Col, Row, Container, Form, Navbar, InputGroup } from "react-bootstrap"
import TagList from "../TagList/TagList"
import './Header.sass'

const Header = () => {
    return (
        <>
            <Navbar bg="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="font-title title">Note Editor</Navbar.Brand>
                    <Navbar.Collapse>
                        <Form>
                            <Row>
                                <Col className="align-self-center">
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Search by tags..."
                                            aria-label="Search by tags..."
                                            aria-describedby="basic-addon2"
                                        />
                                    </InputGroup>                                
                                </Col>
                                <Col md="auto">
                                    <TagList />
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header