import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import profileImg from "../images/profil-2.jpg";

class Hero extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuActive: false,
		};
	}

	render() {
		return (
			<section id="home" className={"hero"}>
				<div className={"slide"}>
					<div className={"hero-image"}>
						<img
							className={"hero-image-img"}
							src={profileImg}
						></img>
					</div>
					<div className={"hero-container"}>
						<div className={"hero-row"}>
							<div className="slide-caption">
								<div className="hero-title">
									<div className="slide-subtitle">
										<h4>I am Julie Parant-Grimala</h4>
									</div>
									<div className="slide-title">
										<h2>Web developer</h2>
									</div>
									<div className="slide-btn">
										<a href="#footer" className={"btn"}>
											Contact Me
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="social-links">
					<ul>
						<li>
							<a
								href={
									"https://linkedin.com/in/julie-parant-grimala-4baa0924"
								}
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									color="#CDCDD4"
									className="fa-icon"
								/>
							</a>
						</li>
						<li>
							<a href={"https://github.com/jgrimala"}>
								<FontAwesomeIcon
									icon={faGithub}
									color="#CDCDD4"
									className="fa-icon"
								/>
							</a>
						</li>
						<li>
							<a href={"mailto:jgrimala@gmail.com"}>
								<FontAwesomeIcon
									icon={faAt}
									color="#CDCDD4"
									className="fa-icon"
								/>
							</a>
						</li>
					</ul>
				</div>
			</section>
		);
	}

	toggleMenu() {
		const { menuActive } = this.state;
		this.setState({
			menuActive: !menuActive,
		});
	}
}

export default Hero;
