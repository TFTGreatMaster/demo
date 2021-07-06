  
export default function updateApi(data) {

    return new Promise((resolve, reject) => {
        console.log("aaaaaaas", data);
        const url = `http://localhost:3001/items/${data.nameUpdate.id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'Application/json' },
            body: JSON.stringify({
                name: data.nameUpdate.name
            })
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