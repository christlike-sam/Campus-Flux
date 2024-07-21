import "../css/team.css"
import t1 from "./t1.jpg"
import t2 from "./t2.jpg"
import t3 from "./t3.jpg"
import t4 from "./t4.jpg"
export default function Team(){
	return(
		<div className="team">
		<h2>Team</h2>
		<div className="images">
			<figure> 
				<img src={t1} alt="CEO" /> 
			<figcaption> <h1>CEO: DANIEL MWANIKI</h1></figcaption>
			</figure>
			<figure>
				<img src={t2} alt="Team Leader" />
				<figcaption> <h1>COO: GRACE MWENDE</h1></figcaption>
				</figure>
			<figure>
				<img src={t3} alt="Digital Strategist"  />
				<figcaption> <h1>CFO: MARY CHEPKEMOI</h1></figcaption>
				</figure>
			<figure>
				<img src={t4} alt="Digital Strategist" />
				<figcaption> <h1>CTO: ALLAN TSUMA</h1></figcaption>
				</figure>
		</div>
		</div>
	)
}