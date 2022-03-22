import React, { Component } from "react";
import CV from "../documents/Resume.pdf";
import FaceImg from "../images/face-2.jpg";

class About extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div id="about" className="about">
				<div className="about-container">
					<div className="about-title">
						<h4>Full-Stack Web Developer</h4>
						<h2>About Me</h2>
					</div>
					<div className="about-content">
						<div className="about-text-1">
							<p>
								Hello! Thank you for checking out my Portfolio!
								My name is Julie and I am a full-stack Web
								Developer, a musician and a designer. I have
								lived and worked all around the world and now I
								live in Montreal QC, back to where it all
								started.
							</p>
							<p>
								Who Am I? What drives me? I thrive when I'm
								learning, when I tackle new challenges. I love
								music, I play bass, flute, I sing, and I
								compose. Between frontend or backend
								development, I simply can't decide which I like
								best. The same can be said about me between
								being a student or a teacher. I want it all, and
								more!
							</p>
							<div className="download-btn">
								<a href={CV} className="btn" download>
									download cv
								</a>
							</div>
						</div>

						<div className="about-image">
							<img src={FaceImg}></img>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
