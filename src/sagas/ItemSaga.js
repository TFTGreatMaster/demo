import { put, takeEvery } from "redux-saga/effects";
import getItems from '../fetchAPI/getItems';
import addApi from '../fetchAPI/addApi';
import * as types from '../constant';
function* getListItem() {
    try {
        const res = yield getItems()
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errMessage: error.message
            }
        })
    }
}
function* postItem(action) {
    try {
        yield addApi(action.payload)
        yield put({
            type: types.ADD_ITEM_SUCCESS,
        })
        yield put({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errMessage: error.message
            }
        })
    }
}
function* postItem(action) {
    try {
        yield deleteApi(action.payload)
        yield put({
            type: types.DELETE_ITEM_SUCCESS,
        })
        
    }
}
export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem),
    takeEvery(types.ADD_ITEM_REQUEST, postItem),
]