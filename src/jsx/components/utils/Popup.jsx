import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Popup extends Component {
	constructor(props) {
		super(props);

		this.el = document.createElement("div");
		this.mouseDownTarget = null;

		this.state = {
			popupContent: this.props.content,
		};
	}

	render() {
		return ReactDOM.createPortal(this.renderPopup(), this.el);
	}

	renderPopup() {
		const { popupContent } = this.state;

		return (
			<div
				className="popup"
				onClick={this.onBackgroundClick.bind(this)}
				onMouseDown={this.onMouseDown.bind(this)}
			>
				<div
					className="popup-container"
					onClick={(e) => e.stopPropagation()}
					onMouseDown={this.onMouseDown.bind(this)}
				>
					<button
						className="close-popup"
						onClick={this.props.closePopup}
					>
						<FontAwesomeIcon
							icon={faTimes}
							color="#F2F2F2"
							className="fa-icon"
						/>
					</button>
					<h3>{this.props.title}</h3>
					<div className="popup-content">
						{popupContent.map((el) => (
							<p>{el}</p>
						))}
					</div>
					{this.props.actions
						? this.props.actions.map((el) => (
								<a
									href={el.href}
									target="blank"
									className={"btn"}
									onClick={el.action}
								>
									{el.name}
								</a>
						  ))
						: null}
				</div>
			</div>
		);
	}

	onMouseDown(e) {
		this.mouseDownTarget = e.target;
		e.stopPropagation();
	}

	onBackgroundClick(e) {
		if (this.mouseDownTarget === e.target) {
			this.props.closePopup();
		}
	}

	componentDidMount() {
		document.body.appendChild(this.el);
	}

	componentWillUnmount() {
		document.body.removeChild(this.el);
	}
}

export default Popup;
