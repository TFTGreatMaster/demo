import React, { Component } from "react";

class Items extends Component {
    render() {
        let listData = []
        if (this.props.items) {
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                    </tr>
                )
            })
        }
        return (
            <div className="">
                <div>
                    <button onClick ={()=>this.props.initLoad()} >GET DATA</button>
                    <table className="list-item">
                        <tbody>
                            <tr>
                                <th className="id">ID của dữ liệu</th>
                                <th className="name">tên của dữ liệu</th>
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