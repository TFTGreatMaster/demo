export default (data) => {
    return new Promise((resole, reject) => {
        const url = `http://localhost:3001/items/search?name=${data}`
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => resole(res))
            .then(err => reject(err))
    })
}