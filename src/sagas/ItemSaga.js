import { put, takeEvery } from "redux-saga/effects";
import getItems from '../fetchAPI/getItems';
import addApi from '../fetchAPI/addApi';
import deleteApi from '../fetchAPI/deleteApi';
import updateApi from '../fetchAPI/updateApi';
import searchApi from '../fetchAPI/searchApi';
import paginationApi from '../fetchAPI/pagination';
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
        yield addApi()
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
function* deleteItem(action) {
    try {
        yield deleteApi(action.payload)
        yield put({
            type: types.DELETE_ITEM_SUCCESS,
        })
        yield put({
            type: types.GET_ITEM_REQUEST,
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
function* updateItem(action) {
    try {
        yield updateApi(action.payload)
        yield put({
            type: types.UPDATE_ITEM_SUCCESS,
        })
        yield put({
            type: types.GET_ITEM_REQUEST,
        })
    }
    catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errMessage: error.message
            }
        })
    }
}

function* searchItem(action) {
    try {
        const res = yield searchApi(action.payload)
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
function* paginationItem (action){
    try {
    
        const allData = yield getItems()
        const res = yield paginationApi(action.payload)
        yield put ({
            type: types.PAGINATION_ITEM_SUCCESS,
            payload : {
                listItem:res,
                activePage : action.payload,
                totalPage : Math.ceil(allData.length / types.LIMIT),
            }
        })
      
    } catch (error) {
        yield put ({
            type: types.PAGINATION_ITEM_FAILURE,
            payload : error
        })

    }
}

export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem),
    takeEvery(types.ADD_ITEM_REQUEST, postItem),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteItem),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItem),
    takeEvery(types.SEARCH_ITEM_REQUEST, searchItem),
    takeEvery(types.PAGINATION_ITEM_REQUEST, paginationItem)

]