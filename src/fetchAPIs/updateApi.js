export default (data) => {
    console.log('datatatat', data);
    return new Promise((resole, reject) => {
        const url = `http://localhost:3001/items/${data.id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'Application/json' },
            body: JSON.stringify({
                name: data.name
            })
        })
            .then(res => res.json())
            .then(res => resole(res))
            .then(err => reject(err))
    })
}