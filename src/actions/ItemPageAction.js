import * as types from '../constant';
export function getListItem(payload) {
    return ({
        type: types.GET_ITEM_REQUEST,
        payload
    })
}
export function addRequest(payload) {
    return ({
        type: types.ADD_ITEM_REQUEST,
        payload
    })
}
export function deleteRequest(payload) {
    return ({
        type: types.DELETE_ITEM_REQUEST,
        payload
    })
}
export function updateRequest(payload) {
    return ({
        type: types.UPDATE_ITEM_REQUEST,
        payload
    })
}
export function searchRequest(payload) {
    return ({
        type: types.SEARCH_ITEM_REQUEST,
        payload
    })
}


export function paginationRequest(payload) {
    return ({
        type: types.PAGINATION_ITEM_REQUEST,
        payload
    })
}

