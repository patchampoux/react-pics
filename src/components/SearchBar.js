import "./SearchBar.css";
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
		<div className="search-bar">
			<form onSubmit={handleFormSubmit}>
				<label htmlFor="search-input">Enter Search Term</label>
				<input type="text" id="search-input" value={term} onChange={handleInputChange} />
			</form>
		</div>
	);
}

export default SearchBar;
