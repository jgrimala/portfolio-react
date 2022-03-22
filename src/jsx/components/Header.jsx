import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ImgHome from "../../images/hero.png";
import ImgAbout from "../../images/about.png";
import ImgEducation from "../../images/education.png";
import ImgExperience from "../../images/experience.png";
import ImgLogo from "../../images/logo-3.png";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuActive: false,
		};
	}

	render() {
		const { menuActive } = this.state;
		return (
			<div className={"fixed-navbar"}>
				<header className={"header"}>
					<nav className={"navigation-container"}>
						<div className="navigation">
							<div className="navbar-header">
								<a className={"navbar-home"} href="index.html">
									<img src={ImgLogo}></img>
								</a>
							</div>
							<nav
								className={
									!menuActive
										? "navigation-container-holder"
										: "navigation-container-holder active"
								}
								onClick={this.toggleMenu.bind(this)}
							>
								<button className="close-navbar">
									<FontAwesomeIcon
										icon={faTimes}
										color="#F2F2F2"
										className="fa-icon"
									/>
								</button>
								<ul className={"navbar-nav"}>
									<li className={"thumb-home"}>
										<a href="#home">
											<img src={ImgHome} alt=""></img>
										</a>
									</li>
									<li className={"thumb-about"}>
										<a href="#about">
											<img src={ImgAbout} alt=""></img>
										</a>
									</li>
									<li className={"thumb-education"}>
										<a href="#education">
											<img
												src={ImgEducation}
												alt=""
											></img>
										</a>
									</li>
									<li className={"thumb-experience"}>
										<a href="#experience">
											<img
												src={ImgExperience}
												alt=""
											></img>
										</a>
									</li>
								</ul>
							</nav>
							<div className="menu-btn-holder">
								<div
									className="menu-btn"
									onClick={this.toggleMenu.bind(this)}
								>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</nav>
				</header>
			</div>
		);
	}

	toggleMenu() {
		const { menuActive } = this.state;
		this.setState({
			menuActive: !menuActive,
		});
	}
}

export default Header;
