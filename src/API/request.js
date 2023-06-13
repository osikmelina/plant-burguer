const API_URL = 'http://localhost:8080'

export async function request (endpoint, method="GET", headers={}, body={}) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body)
    })
    const data = await response.json()
    const value = {data, status:response.status}
    if (response.status !== 200) {
        throw new Error(value);
    }
    return value
}