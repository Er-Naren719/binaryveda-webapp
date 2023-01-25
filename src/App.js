import "./App.css";
import Header from "./components/Header/Header";
import SectionDetails from "./components/SectionDetails/SectionDetails";
import Illustration from "./assets/illustration.png";
import Showcase from "./assets/showcase.png";
import Botbot from "./assets/botbot.png";
import Button from "./components/Button/Button";
import CustomCard from "./components/CustomCard/CustomCard";
import { CustomCardData } from "./Data";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<div className="container-fluid">
				<header>
					<Header />
				</header>
			</div>
			<div className="container">
				<main>
					<section className="section-1 flex-section">
						<SectionDetails
							title="Let's build the future of design, now."
							desc="Create amazing tools and integrations for 1 millior users or customise Marvel for your team"
						>
							<Button
								buttonText="Submit your app"
								buttonStyle="lightButton"
							/>
							<Button buttonText="View API Docs" buttonStyle="darkButton" />
						</SectionDetails>
						<div className="img-container width-50">
							<img
								className="w-100"
								src={Illustration}
								alt="Illustration"
							></img>
						</div>
					</section>
					<section className="section-2">
						<SectionDetails
							title="Experience the freedom to build features, right away."
							desc="You can now harness components of our platform and build powerful intecrations for our 2 million users - or simply just for your team."
						/>
						<div className="custom-card-container">
							{CustomCardData &&
								CustomCardData.map((card) => (
									<CustomCard card={card} key={card.id} />
								))}
						</div>
					</section>
					<section className="section-3 flex-section">
						<SectionDetails
							title="Showcase your app in our integrations directory"
							desc="Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life."
						>
							<Button buttonText="Become a partner" buttonStyle="lightButton" />
							<Button buttonText="View Integrations" buttonStyle="darkButton" />
						</SectionDetails>
						<div className="img-container width-50">
							<img className="w-100" src={Showcase} alt="Showcase"></img>
						</div>
					</section>
					<section className="section-4 flex-section">
						<div className="img-container width-50">
							<img className="w-100" src={Botbot} alt="Botbot"></img>
						</div>
						<SectionDetails
							blockStyle="text-right"
							title="A Slack-bot for creating and managing prototypes"
							desc="Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life."
						>
							<Button buttonText="Become a partner" buttonStyle="lightButton" />
							<Button buttonText="View Integrations" buttonStyle="darkButton" />
						</SectionDetails>
					</section>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</div>
	);
}

export default App;
