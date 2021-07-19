import {LIMIT} from '../constant'
export default function paginationApi(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items/pagination?_limit=${LIMIT}&_page=${data}`
        console.log(url);
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