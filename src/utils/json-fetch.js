const HOST = 'http://localhost:3000';

export async function fetchGET(url) {
        const resp = await fetch(HOST + url);
        const data = await resp.json()
        return data;
}

export async function fetchPOST(url, body) {
        const resp = await fetch(HOST + url, body);
        const data = await resp.json()
        return data;
}