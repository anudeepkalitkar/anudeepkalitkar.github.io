import React from "react";
const Contact = () => {
    return (
        <div className="section">
            <div className="section-inner z-depth-1">
                <h2 className="heading">Contact Me</h2>

                <form action="email.php" method="POST" className="card-panel section-inner">
                    <div className="input-field ">
                        <input type="email" name="Name" id="Email" required /><span id="_Email" className="red-text"></span>
                        <label>Email</label>
                    </div>

                    <div className="input-field ">
                        <input type="text" name="Subject" id="Subject" required />
                        <label >Subject</label>
                    </div>

                    <div className="input-field">
                        <textarea id="Message" name="Message" className="materialize-textarea" required></textarea>
                        <label>Message</label>
                    </div>
                    <br />
                    <div className="center">
                        <button className="btn waves-effect waves-light" type="submit" name="action" >Submit<i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
                <hr />
                <h6 className="">Also Reach Me at</h6>

                <ul className="social list-inline center">
                    <li className="list-inline">
                        <a href="mailto:anudeep.kalitkar@gmail.com" rel="noreferrer" target="_blank">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </li>
                    <li className="list-inline">
                        <a href="https://in.linkedin.com/in/kalitkar-anudeep-629308189" rel="noreferrer" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className="list-inline">
                        <a href="https://github.com/anudeepkalitkar/" rel="noreferrer" target="_blank">
                            <i className="fab fa-github-alt"></i>
                        </a>
                    </li>
                    <li className="list-inline">
                        <a href="https://www.instagram.com/anudeep_kalitkar/" rel="noreferrer" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>


                </ul>
            </div>
        </div>

    )

}
export default Contact;
