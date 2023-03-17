import axios from 'axios';

// creating an axios instance with a baseURL and params to be used to make requests
export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '37ac3247ab154a13ae557b61aa487c4f', // api key to authenticate the requests
	},
});
