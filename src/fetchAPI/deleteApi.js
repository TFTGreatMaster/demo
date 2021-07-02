export default function deleteApi(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items/${data}`;
        fetch(url, {
            method: 'DELETE',

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