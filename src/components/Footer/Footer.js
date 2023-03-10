import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhiteLogo from "../../assets/logo-white.svg";
import { FooterData } from "../../Data";
import "./Footer.css";

const Footer = () => {
	return (
		<Container>
			<Row>
				<Col className="logo-column" md={2} sm={12}>
					<img src={WhiteLogo} />
				</Col>
				{FooterData &&
					FooterData.map((data) => (
						<Col key={data.title} md={2} sm={6} xs={6}>
							<h6 className="section-heading text-light mb-3">{data.title}</h6>
							<ul className="list-unstyled">
								{data.links.map((link) => (
									<li key={link}>
										{link}
									</li>
								))}
							</ul>
						</Col>
					))}
			</Row>
		</Container>
	);
};

export default Footer;
