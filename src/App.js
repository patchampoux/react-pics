import SearchBar from "./components/SearchBar";

const App = () => {
	const handleSubmit = (term) => {
		console.log("Do a search with", );
	}

	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
		</div>
	);
}

export default App;
