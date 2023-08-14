import React, { useState } from "react";
import axios from "axios";

import "./ContactMe.css";
const ContactMe = (props) => {
	const { darkMode } = props;
	const [formData, setFormData] = useState({ emailid: "", subject: "", message: "" });
	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault(formData);
		console.log(formData);
		let email = {
			method: "post",
			contentType: "application/json",
			url: "https://api.99kalitkar.in/email",
			data: formData,
		};
		await axios(email).then(
			(res) => {
				if (res.data.success) {
					alert("Email Sent!");
				}
			},
			(error) => console.log(error)
		);
	};
	return (
		<section className="section" id="Contact">
			<h3 className="center ">Contact Me</h3>
			<br></br>
			<div className="container ">
				<div className="container z-depth-1">
					<form method="POST" className="card-panel " onSubmit={handleSubmit}>
						<div className="input-field ">
							<input
								type="email"
								name="emailid"
								id="emailid"
								value={formData.emailid}
								onChange={handleChange}
								required
							/>
							<label>Your Email</label>
						</div>

						<div className="input-field ">
							<input
								type="text"
								name="subject"
								id="subject"
								value={formData.subject}
								onChange={handleChange}
								required
							/>
							<label>Subject</label>
						</div>

						<div className="input-field">
							<textarea
								id="message"
								name="message"
								className="materialize-textarea"
								value={formData.message}
								onChange={handleChange}
								required></textarea>
							<label>Message</label>
						</div>
						<br />
						<div className="center">
							<button
								className="btn waves-effect waves-light"
								type="submit"
								name="submit">
								Submit<i className="material-icons right">send</i>
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
export default ContactMe;
