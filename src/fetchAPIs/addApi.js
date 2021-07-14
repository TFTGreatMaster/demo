export default (data) => {
    return new Promise((resole, reject) => {
        const url = 'http://localhost:3001/items'
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'Application/json' },
            body: JSON.stringify({
                name: data
            })
        })
            .then(res => res.json())
            .then(res => resole(res))
            .then(err => reject(err))
    })
}