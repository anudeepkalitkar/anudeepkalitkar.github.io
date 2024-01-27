import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import M from "materialize-css";
import { HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		 {/* <HashRouter> */}
		<App />
		{/* </HashRouter> */}
	</React.StrictMode>,
	document.getElementById("root"),
	document.addEventListener("DOMContentLoaded", function () {
		M.AutoInit();
	})
);

reportWebVitals();
