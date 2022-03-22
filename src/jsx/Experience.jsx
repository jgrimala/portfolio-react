import React, { Component } from "react";
import Card from "./components/Card";

import Jobs from "../data/Jobs";

class Experience extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div id="experience" className="experience">
				<div className="experience-container">
					<div className="experience-title">
						<h4>Where it leads</h4>
						<h2>Experience</h2>
						<hr />
					</div>
					<div className="experience-row">
						<div className="experience-row">
							{Jobs.job.map(function (job, i) {
								return <Card key={i} content={job}></Card>;
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Experience;
