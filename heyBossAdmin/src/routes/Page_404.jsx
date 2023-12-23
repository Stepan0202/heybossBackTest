import Container from "react-bootstrap/esm/Container";
import { NavLink } from 'react-router-dom';
import { useRouteError } from "react-router-dom";

export default function Page_404(){
    const error = useRouteError();
    const data = error.data;
    const details = error.error
    return(
        <Container>
            <h1>Ooops! It`s error page😒</h1>
            <p>Our error is: {data}.</p>
            <p>Details: details</p>
            <p>Give us one more chance — <NavLink to="/">go away to the main!</NavLink></p>
        </Container>
    )
}