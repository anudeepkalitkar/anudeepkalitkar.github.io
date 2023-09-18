import React from "react";
const GenerateProjectDesp = (props) => {
	const { text } = props;
	const sentences = text.split(".");
	return (
		<>
			{sentences.map((sentence, index) => {
				if (sentence.trim().length >2 ) {
					return <p key={index}>{sentence.trim()}.</p>;
				} else {
					return null;
				}
			})}
		</>
	);
};

export default GenerateProjectDesp;
