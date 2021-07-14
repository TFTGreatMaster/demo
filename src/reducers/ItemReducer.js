import * as types from '../constants'
const STATE = {
    listItem: [],
    errMessage: null,
    totalPage: 0,
    activePage: 1
}
export default (state = STATE, action) => {
    switch (action.type) {
        case types.GET_ITEM_REQUEST:
        case types.PAGI_ITEM_REQUEST:
            return {
                ...state
            }
        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                listItem: action.payload,
                errMessage: null
            }
        case types.GET_ITEM_FAILURE:
        case types.PAGI_ITEM_FAILURE:
            return {
                ...state,
                errMessage: action.payload.message
            }
        case types.PAGI_ITEM_SUCCESS:
            return {
                ...state,
                listItem: action.payload.listItem,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage
            }
        case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                listItem: action.payload.listItem,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
                textSearch: action.payload.textSearch
            }
        default: return state
    }
}