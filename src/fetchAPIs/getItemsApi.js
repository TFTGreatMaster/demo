export default function getItems() {
    return new Promise((resole, reject) => {
        const url = 'http://localhost:3001/items'
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => resole(res))
            .then(err => reject(err))
    })
}