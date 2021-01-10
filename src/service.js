import { fetchJson } from "./json-fetch.js";

export function app() {
    // console.log("sup");
    // const url = "./test.json";
    // fetch(url)
    //     .then(resp => resp.json())
    //     .then(data => console.log(data))

    console.log("from async wait")
    const url = "./test.json";

    fetchJson(url).then(data => console.log(data));
    // const data = fetchJson(url);
    // console.log(newLocal);
    // fetchData = async () => {
    //     console.log("from async wait")
    //     const url = "./test.json";
    //     const resp = await fetch(url);
    //     const data = await resp.json()
    //     console.log(data);
    // }
    
    
    // fetchData();
}