import { Navbar, CloseButton } from "react-bootstrap"

const Tag = (props) =>  {
    return <>
        <Navbar.Text className="text-tag font-curse">
                <a className="tag" href="#"> #{props.text} </a>
                <CloseButton className="button-close" />
        </Navbar.Text >
    </>
}

export default Tag