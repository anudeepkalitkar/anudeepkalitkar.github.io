import React, { useState } from "react";
import axios from "axios";
import { EmailAPI } from "../StaticInformation/UrlLinkInfo";
import "./ContactMe.css";
const ContactMe = (props) => {
	const [formData, setFormData] = useState({ sendersEmailId: "", sendersSubject: "", sendersMessage: "" });
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
			url: EmailAPI,
			data: formData,
		};
		await axios(email).then(
			(res) => {
				if (res.data.success) {
					alert("Thanks for your Email. I will respond as soon as possible!");
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
								name="sendersEmailId"
								id="sendersEmailId"
								value={formData.sendersEmailId}
								onChange={handleChange}
								required
							/>
							<label>Your Email</label>
						</div>

						<div className="input-field ">
							<input
								type="text"
								name="sendersSubject"
								id="sendersSubject"
								value={formData.sendersSubject}
								onChange={handleChange}
								required
							/>
							<label>Subject</label>
						</div>

						<div className="input-field">
							<textarea
								id="sendersMessage"
								name="sendersMessage"
								className="materialize-textarea"
								value={formData.sendersMessage}
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
