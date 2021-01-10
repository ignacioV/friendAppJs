export async function fetchJson(url) {
        console.log(url);
        const resp = await fetch(url);
        const data = await resp.json()
        return data;
}