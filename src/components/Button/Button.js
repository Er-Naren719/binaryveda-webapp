import React from "react";
import "./Button.css";

const Button = ({ buttonText, buttonStyle }) => {
	return <button className={buttonStyle}>{buttonText}</button>;
};

export default Button;
