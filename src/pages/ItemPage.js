import React, { Component } from 'react';
import ItemPageContainer from '../containers/ItemPageContainer';

class ItemPage extends Component {
    render() {
        return (
            <div className="HomePage">
                <h1>Trang Items</h1>
                <ItemPageContainer />
            </div>
        );
    }
}

export default ItemPage;
