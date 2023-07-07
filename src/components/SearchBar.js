const SearchBar = ({ onSubmit }) => {
	const handleFormSubmit = (e) => {
		e.preventDefault();

		onSubmit('cars');
	}

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input type="text"/>
			</form>
		</div>
	);
}

export default SearchBar;
