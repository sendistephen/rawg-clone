import axios, { AxiosRequestConfig } from 'axios';

// creating an axios instance with a baseURL and params to be used to make requests
const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '37ac3247ab154a13ae557b61aa487c4f', // api key to authenticate the requests
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}
	getAll = async (config: AxiosRequestConfig) => {
		const res = await axiosInstance.get<FetchResponse<T>>(
			this.endpoint,
			config
		);
		return res.data;
	};
	get = async (id: number | string) => {
		const res = await axiosInstance.get<T>(this.endpoint + '/' + id);
		return res.data;
	};
}

export default APIClient;
