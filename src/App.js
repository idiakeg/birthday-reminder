import "./App.css";
import List from "./List";
import { data } from "./data";
import { useState } from "react";

function App() {
	const [people, setPeople] = useState(data);
	const handleClick = () => {
		setPeople([]);
	};
	return (
		<div className="app">
			<h3> {people.length} Birthdays Today</h3>
			<div className={people.length <= 0 ? "list" : undefined}>
				{people.length > 0 &&
					people.map(({ id, name, age, image }) => (
						<List age={age} image={image} name={name} key={id} />
					))}
			</div>

			<button onClick={handleClick}>Clear All</button>
		</div>
	);
}

export default App;
