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
// export function postItem(payload) {
//     return ({
//         type: types.POST_ITEM_REQEST,
//         payload
//     })
// }