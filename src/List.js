import React from "react";

const List = ({ name, age, image }) => {
	return (
		<div className="list-container">
			<div className="image">
				<img src={image} alt="Birthday Celebrant" />
			</div>
			<div className="details">
				<p>{name}</p>
				<span>{age} years</span>
			</div>
		</div>
	);
};

export default List;
