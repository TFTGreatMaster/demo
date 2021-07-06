export default function callApi(data) {
    console.log("dataaaa", data);
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items?q=${data.nameSearch}`;
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(res => {
                resolve(res);
                console.log(res);
            })
            .catch(err => {
                reject(err)
            })
    })
}