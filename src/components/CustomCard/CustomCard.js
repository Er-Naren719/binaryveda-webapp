import Card from "react-bootstrap/Card";
import "./CustomCard.css";

const CustomCard = ({ card }) => {
	return (
		<Card className="text-center" key={card.id}>
			<Card.Img variant="top" src={card.imgSrc} />
			<Card.Body>
				<Card.Title>{card.title}</Card.Title>
				<Card.Text>{card.desc}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CustomCard;
