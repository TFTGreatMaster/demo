import React, { Component } from "react";

class Items extends Component {
    state = {
        nameAdd: ''
    }
    render() {
        let listData = []
        if (this.props.items) {
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{item.id} </th>
                        <th>{item.name}</th>
                        <th><button onClick={() => {
                            this.props.deleteItem(item.id)
                        }}>DELETE</button></th>
                        <th><button onClick={() => {
                            this.props.updateItem(item.id)
                        }}>Update</button></th>
                    </tr>
                )
            })
        }
        return (
            <div className="">
                <div>
                    <input onChange={(e) => {
                        this.setState({
                            nameAdd: e.target.value
                        })
                    }} />
                    <button onClick={() => {
                        this.props.addData({
                            name: this.state.nameAdd
                        })
                    }}>ADD</button>
                    <table className="list-item">
                        <tbody>
                            <tr>
                                <th className="id">ID của dữ liệu</th>
                                <th className="name">tên của dữ liệu</th>
                                <th >action</th>
                            </tr>
                            {listData}
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
export default Items;