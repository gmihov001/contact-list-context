import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";
import { Consumer } from "../store/appContext";

export default class AddContact extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			address: "",
			phone: "",
			email: ""
		};
	}

	render() {
		return (
			<AppContext.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Add a new contact</h1>

								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											type="text"
											className="form-control"
											onChange={e => this.setState({ name: e.target.value })}
											placeholder="Full Name"
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											type="email"
											className="form-control"
											onChange={e => this.setState({ email: e.target.value })}
											placeholder="Enter email"
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											type="phone"
											className="form-control"
											onChange={e => this.setState({ phone: e.target.value })}
											placeholder="Enter phone"
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											type="text"
											className="form-control"
											onChange={e => this.setState({ address: e.target.value })}
											placeholder="Enter address"
										/>
									</div>
									<Link to="/">
										<button
											onClick={() =>
												actions.addContact(
													this.state.name,
													this.state.address,
													this.state.phone,
													this.state.email
												)
											}
											type="button"
											className="btn btn-primary form-control"
											disabled={
												!this.state.name &&
												!this.state.address &&
												!this.state.phone &&
												!this.state.email
											}>
											SAVE
										</button>
									</Link>
									<Link to="/">
										<button
											type="button"
											className="btn btn-warning mt-3 py-2 w-100 text-center bg-warning rounded shadow-sm">
											Go back to Contacts
										</button>
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</AppContext.Consumer>
		);
	}
}
