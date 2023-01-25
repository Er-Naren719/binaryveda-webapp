import React from "react";
import './SectionDetails.css';

const SectionDetails = ({ title, desc, blockStyle="text-left", children }) => {
	return (
		<div className={children ? `section-details side-section ${blockStyle}` : 'section-details broad-section'}>
			<h2>{title}</h2>
			<p>{desc}</p>
			{children && <div className="button-container">{children}</div>}
		</div>
	);
};

export default SectionDetails;
