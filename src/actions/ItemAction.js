import * as types from '../constants'

export function getItems() {
    return ({
        type: types.GET_ITEM_REQUEST
    })
}
export function pagiItems(payload) {
    return ({
        type: types.PAGI_ITEM_REQUEST,
        payload
    })
}
export function searchItems(payload) {
    return ({
        type: types.SEARCH_ITEM_REQUEST,
        payload
    })
}
export function delItems(payload) {
    return ({
        type: types.DEL_ITEM_REQUEST,
        payload
    })
}
export function addItems(payload) {
    return ({
        type: types.ADD_ITEM_REQUEST,
        payload
    })
}
export function updateItems(payload) {
    return ({
        type: types.UPDATE_ITEM_REQUEST,
        payload
    })
}