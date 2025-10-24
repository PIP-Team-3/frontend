const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

const constructAPIUrl = (path: string) => {
	return `${BASE_API_URL}${path}`;
};

export const fetchAPI = async (path: string) => {
	const req = await fetch(constructAPIUrl(path), { method: "GET" });

	return req.json();
};

export const postAPI = async (path: string, body: Record<string, unknown>) => {
	const req = await fetch(constructAPIUrl(path), {
		method: "POST",
		body: JSON.stringify(body),
	});
	return req.json();
};
