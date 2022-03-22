import React, { Component } from "react";
import Card from "./components/Card";

import Schools from "../data/Schools";

class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div id="education" className="education">
				<div className="education-container">
					<div className="education-title">
						<h4>Where it began</h4>
						<h2>Education</h2>
						<hr />
					</div>
					<div className="education-row">
						{Schools.education.map(function (school, i) {
							return <Card key={i} content={school}></Card>;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Education;
