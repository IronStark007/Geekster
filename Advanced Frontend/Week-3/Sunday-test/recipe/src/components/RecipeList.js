
import { Container, Col, Row } from 'react-bootstrap';
import RecipeCard from "./RecipeCard";

const RecipeList = (props) => {
    return (
        <>
         <Container className="mt-4">
                <Row>
                    {props.recipeList.map((ele,idx)=> {
                        return <Col key={idx} sm={4}><RecipeCard ele={ele}/></Col>
                    })}
                </Row>
            </Container>
        </>
    );
}

export default RecipeList;