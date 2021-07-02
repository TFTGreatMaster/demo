import React from 'react';
import Items from '../components/Items'
import * as actions from '../actions/ItemPageAction'
import { connect } from 'react-redux'
class ItemPageContainer extends React.Component {
    componentDidMount() {
        this.props.initLoad()
    }
    render() {
        return (
            <Items {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items.listItem
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
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)
