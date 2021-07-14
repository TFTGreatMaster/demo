import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../components/Items';
import * as action from '../actions/ItemAction'

class ItemPageContainer extends Component {
    componentDidMount() {
        // this.props.initLoad()
        this.props.pagi(1)
    }
    render() {
        return (
            <Items{...this.props} />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items.listItem,
        totalPage: state.items.totalPage,
        activePage: state.items.activePage,
        textSearch: state.items.textSearch
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(action.getItems())
        },
        pagi: (data) => {
            dispatch(action.pagiItems(data))
        },
        search: (data) => {
            dispatch(action.searchItems(data))
        },
        del: (data) => {
            dispatch(action.delItems(data))
        },
        add: (data) => {
            dispatch(action.addItems(data))
        },
        update: (data) => {
            dispatch(action.updateItems(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)
