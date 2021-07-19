import React, { Component } from "react";

class Items extends Component {
    state = {
        nameAdd: '',
        nameUpdate: {
            id: '',
            name: ''
        },
        dataSearch: '',


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
                            this.setState({
                                nameUpdate: {
                                    id: item.id,
                                    name: item.name
                                }
                            })
                        }}>Update</button></th>

                    </tr >
                )
            })
        }

        let page = []
        let activePage = this.props.activePage
        let totalPage = this.props.totalPage
    
        for (let i = 1; i <= totalPage; i++) {
            page.push(i)
        }
        let pagination = page.map((item,key)=>{
            if(activePage===item){
                return(
                    <button  key ={key} onClick={()=>this.props.activePage(item)} >{item}</button>
                )
            }
            else{
                return(
                    <button key ={key} onClick={()=>this.props.activePage(item)} >{item}</button>
                )
            }
        })
        return (
            <div className="" >
                <div>
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
                    </div>
                    <div>
                        <input value={this.state.nameUpdate.name} onChange={(e) => {
                            this.setState({
                                nameUpdate: {
                                    id: this.state.nameUpdate.id,
                                    name: e.target.value
                                }
                            })
                        }} />
                        <button onClick={() => {
                            this.props.updateData({
                                nameUpdate: this.state.nameUpdate
                            })
                        }}>update</button>
                    </div>
                    <div>
                        <input type="text" onChange={(e) => {
                            this.setState({
                                nameSearch: e.target.value
                            })
                        }} />
                        <button onClick={(e) => {
                            this.props.searchItem({
                                nameSearch: this.state.nameSearch
                            })
                        }}>search</button>
                    </div>
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
                    {pagination}
                </div>
            </div>
        )
    }
}
export default Items;