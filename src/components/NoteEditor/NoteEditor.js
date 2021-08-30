import NoteList from '../NoteList/NoteList'
import Header from '../Header/Header'
import { Container } from 'react-bootstrap'

const NoteEditor = () => {
    return(
        <>
            <Container>
                <Header/>
                <NoteList/>
            </Container>
        </>
    )
}

export default NoteEditor