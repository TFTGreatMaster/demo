import * as types from '../constant';
export function getListItem() {
    return ({
        type: types.GET_ITEM_REQUEST
    })
}
export function addRequest(payload){
    return({
        type: types.ADD_ITEM_REQUEST,
        payload
    })
}
export function deleteRequest(payload){
    return({
        type: types.DELETE_ITEM_REQUEST,
        payload
    })
}
export function updateRequest(payload){
    return({
        type: types.UPDATE_ITEM_REQUEST,
        payload
    })
}
