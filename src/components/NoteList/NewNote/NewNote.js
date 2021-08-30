import { Button } from "react-bootstrap"
import { BiPlus } from "react-icons/bi"

const NewNote = () => {
    return(
        <>
            <Button 
                className="button justify-content-center align-items-center" 
                style={{width: "-webkit-fill-available", height: "100%"}}>
                <BiPlus style={{width: "6em", height: "6em"}}/>
            </Button>
        </>
    )
}

export default NewNote