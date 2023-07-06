import axios from "axios";

const searchImages = async () => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization: "Client-ID raf25EoWtEnzjbYaSAQNHeq0burFUQbwYQGsjL3IrkI"
		},
		params: {
			query: 'cars'
		}
	});

	console.log(response);

	return response;
}

export default searchImages;
