import {useState} from "react";

const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();

		onSubmit(term);
	}

	const handleInputChange = (e) => {
		setTerm(e.target.value);
	}

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input type="text" value={term} onChange={handleInputChange} />
			</form>
		</div>
	);
}

export default SearchBar;
