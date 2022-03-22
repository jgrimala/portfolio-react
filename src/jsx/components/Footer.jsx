import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import ImgLogo from "../../images/logo-5.png";

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const {} = this.state;
		return (
			<div id="footer" className={"footer"}>
				<div className="footer-container">
					<div className="footer-row">
						<div className="footer-col">
							<p>H2K 1M8 Montréal QC</p>
							<a>jgrimala@gmail.com</a>
						</div>
						<div className="footer-col">
							<div className="footer-menu">
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
						</div>
						<div className="footer-col">
							<div className="footer-sub">
								<p>Copyright - 2022 Julie Grimala</p>
								<p>
									Developed by Julie Grimala with{" "}
									<em>React</em>
								</p>
								<a href="#home">
									<img src={ImgLogo}></img>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
