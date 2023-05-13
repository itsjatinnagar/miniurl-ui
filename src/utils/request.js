export default function request(endpoint, method = "GET", data = null) {
  return fetch(`http://127.0.0.1:5000${endpoint}`, {
    body: data && JSON.stringify(data),
    // credentials: "same-origin",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    method: method,
    // mode: "same-origin",
  });
}
