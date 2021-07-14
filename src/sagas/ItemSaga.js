import { put, takeEvery } from '@redux-saga/core/effects'
import * as types from '../constants'
import getItemsApi from '../fetchAPIs/getItemsApi'
import getPagiApi from '../fetchAPIs/getPagiApi'
import getPagiSearch from '../fetchAPIs/getPagiSearch'
import getSearchApi from '../fetchAPIs/getSearchApi'
import delApi from '../fetchAPIs/delApi'
import addApi from '../fetchAPIs/addApi'
import updateApi from '../fetchAPIs/updateApi'
function* getItems() {
    try {
        const res = yield getItemsApi()
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
function* delItems(action) {
    try {
        yield delApi(action.payload)
        yield put({
            type: types.DEL_ITEM_SUCCESS
        })
        yield put({
            type: types.PAGI_ITEM_REQUEST
        })
    } catch (err) {
        yield put({
            type: types.DEL_ITEM_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
function* addItems(action) {
    try {
        yield addApi(action.payload)
        yield put({
            type: types.ADD_ITEM_SUCCESS
        })
        yield put({
            type: types.PAGI_ITEM_REQUEST
        })
    } catch (err) {
        yield put({
            type: types.ADD_ITEM_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
function* updateItems(action) {
    try {
        yield updateApi(action.payload)
        yield put({
            type: types.UPDATE_ITEM_SUCCESS
        })
        yield put({
            type: types.PAGI_ITEM_REQUEST
        })
    } catch (err) {
        yield put({
            type: types.UPDATE_ITEM_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
function* pagiItems(action) {
    try {
        const allData = yield getItemsApi()
        const data = yield getPagiApi(action.payload)
        const totalPage = Math.ceil(allData.length / types.LIMIT)
        yield put({
            type: types.PAGI_ITEM_SUCCESS,
            payload: {
                listItem: data,
                totalPage: totalPage,
                activePage: action.payload
            }
        })
    } catch (err) {
        yield put({
            type: types.PAGI_ITEM_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
function* searchItems(action) {
    try {
        const allData = yield getSearchApi(action.payload.textSearch)
        const data = yield getPagiSearch(action.payload)
        const totalPage = Math.ceil(allData.length / types.LIMIT)
        yield put({
            type: types.SEARCH_ITEM_SUCCESS,
            payload: {
                listItem: data,
                totalPage: totalPage,
                activePage: action.payload.activePage,
                textSearch: action.payload.textSearch
            }
        })
    } catch (err) {
        yield put({
            type: types.SEARCH_ITEM_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getItems),
    takeEvery(types.PAGI_ITEM_REQUEST, pagiItems),
    takeEvery(types.SEARCH_ITEM_REQUEST, searchItems),
    takeEvery(types.DEL_ITEM_REQUEST, delItems),
    takeEvery(types.ADD_ITEM_REQUEST, addItems),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItems),
]