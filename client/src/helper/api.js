const endpoint = process.env.API_URL;

async function send({ method, path, data }) {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers["Content-Type"] = "application/json";
		opts.body = JSON.stringify(data);
	}

	return fetch(`${endpoint}/${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path) {
	return send({ method: "GET", path });
}

export function post(path, data) {
	return send({ method: "POST", path, data });
}

export function del(path, data) {
	return send({ method: "DELETE", path, data });
}
