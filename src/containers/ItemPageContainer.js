import React from 'react';
import Items from '../components/Items'
import * as actions from '../actions/ItemPageAction'
import { connect } from 'react-redux'
class ItemPageContainer extends React.Component {
    componentDidMount() {
        this.props.paginationItem(1)
    }
    render() {
        return (
            <Items {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items.listItem,
        activePage : state.items.activePage,
        totalPage : state.items.totalPage

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListItem())
        },
        addData: (data) => {
            dispatch(actions.addRequest(data))
        },
        deleteItem: (data) => {
            dispatch(actions.deleteRequest(data))
        },
        updateData: (data) => {
            dispatch(actions.updateRequest(data))
        },
        searchItem: (data) => {
            dispatch(actions.searchRequest(data))
        },
        paginationItem : (data) =>{
            dispatch(actions.paginationRequest(data))
        }
        

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)
