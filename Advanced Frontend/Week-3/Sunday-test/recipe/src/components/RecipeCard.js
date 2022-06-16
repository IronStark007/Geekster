import { Card } from "react-bootstrap";

const RecipeCard = (props) => {
    return (
        <>
        {console.log(props.ele.recipe.label)}
            <Card className="bg-dark text-white mb-4">
                <Card.Img src={props.ele.recipe.images.THUMBNAIL.url} alt={props.ele.recipe.label} />
                {/* <Card.Img src="https://images.unsplash.com/photo-1649859394614-dc4f7290b7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt={props.ele.recipe.label} /> */}
                <Card.ImgOverlay>
                    <Card.Title>{props.ele.recipe.label}</Card.Title>
                    <Card.Text>Source: {props.ele.recipe.source}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}

export default RecipeCard;