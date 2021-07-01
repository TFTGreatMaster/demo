import { put, takeEvery } from "redux-saga/effects";
import getItems from '../fetchAPI/getItems';
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
            types: types.GET_ITEM_FAILURE,
            payload: {
                errMessage: error.message
            }
        })
    }
}
export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQEST, getListItem)
]