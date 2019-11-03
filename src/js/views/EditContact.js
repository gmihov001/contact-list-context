import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";

export default class EditContact extends React.Component {
	constructor(props) {
		super(props);
		this.inputName = React.createRef();
		this.inputEmail = React.createRef();
		this.inputPhone = React.createRef();
		this.inputAdress = React.createRef();
	}

	editValue = (e, id) => {
		e.preventDefault();
		let name = this.inputName.current.value;
		let email = this.inputEmail.current.value;
		let phone = this.inputPhone.current.value;
		let address = this.inputAdress.current.value;
		return { name, address, phone, email, id };
	};

	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					let contact = store.agenda.find(item => item.id == this.props.match.params.bubu);
					console.log("$$$", contact);
					console.log("props", this.props.match.params.bubu);
					if (contact) {
						return (
							<div className="container">
								<div>
									<h1 className="text-center mt-5">Edit Contact</h1>
									<form>
										<div className="form-group">
											<label>Full Name</label>
											<input
												defaultValue={contact.full_name}
												type="text"
												ref={this.inputName}
												className="form-control"
												placeholder="Full Name"
											/>
										</div>
										<div className="form-group">
											<label>Email</label>
											<input
												defaultValue={contact.email}
												type="email"
												ref={this.inputEmail}
												className="form-control"
												placeholder="Enter email"
											/>
										</div>
										<div className="form-group">
											<label>Phone</label>
											<input
												defaultValue={contact.phone}
												type="phone"
												ref={this.inputPhone}
												className="form-control"
												placeholder="Enter phone"
											/>
										</div>
										<div className="form-group">
											<label>Address</label>
											<input
												defaultValue={contact.address}
												type="text"
												ref={this.inputAdress}
												className="form-control"
												placeholder="Enter address"
											/>
										</div>

										<button
											onClick={e => {
												const edit = this.editValue(e, contact.id);
												if (edit) {
													actions.editContact(
														edit.name,
														edit.address,
														edit.phone,
														edit.email,
														edit.id,
														this.props.history
													);
												}
											}}
											type="button"
											className="btn btn-primary form-control">
											save
										</button>

										<Link className="mt-3 w-100 text-center" to="/">
											or get back to contacts
										</Link>
									</form>
								</div>
							</div>
						);
					}
				}}
			</Consumer>
		);
	}
}
EditContact.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};