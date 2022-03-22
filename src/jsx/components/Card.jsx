import React, { Component } from "react";
import Popup from "./utils/Popup";

class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openPopup: false,
		};
	}

	render() {
		const { openPopup } = this.state;

		return (
			<div className="card">
				<div className="card-item">
					<div className="card-single">
						<div className="card-img">
							<img src={this.props.content.img}></img>
						</div>
						<div className="card-content">
							<h3>
								{this.props.content.title
									? this.props.content.title
									: null}
							</h3>
							<h4>
								{this.props.content.subtitle
									? this.props.content.subtitle
									: null}
							</h4>
							<p>
								{this.props.content.type
									? this.props.content.type
									: null}
								{this.props.content.year
									? " (" + this.props.content.year + ") "
									: null}
							</p>
							<a
								href="#more"
								className={"btn"}
								onClick={this.openPopup.bind(this)}
							>
								{this.props.content.btnText}
							</a>
						</div>
					</div>
					{!openPopup ? null : (
						<Popup
							title={this.props.content.subtitle}
							content={this.props.content.description}
							actions={this.props.content.actions}
							closePopup={this.closePopup.bind(this)}
						></Popup>
					)}
				</div>
			</div>
		);
	}

	closePopup() {
		this.setState({
			openPopup: false,
		});
	}

	openPopup() {
		this.setState({
			openPopup: true,
		});
	}
}

export default Card;
