import React, { Component } from 'react';

class Items extends Component {
  state = {
    textSearch: '',
    add: '',
    update: {
      id: '',
      name: ''
    }
  }
  render() {
    let data = []
    if (this.props.items) {
      data = this.props.items.map((item, key) => {
        return (
          <tr >
            <td>{key + 1}</td>
            <td>{item.name}</td>
            <td ><button onClick={() => { this.props.del(item._id) }}>DELETE</button></td>
            <td ><button onClick={() => {
              this.setState({
                update: {
                  id: item._id,
                  name: item.name
                }
              })
            }}>CHON</button></td>
          </tr>
        )
      })
    }
    let page = []
    if (this.props.totalPage) {
      for (let i = 1; i <= this.props.totalPage; ++i) {
        page.push(i)
      }
    }
    let btnPage = page.map((item) => {
      if (this.props.textSearch) {
        if (item === this.props.activePage) {
          return (<button style={{ background: 'black', color: '#fff' }} onClick={() => {
            this.props.search({
              textSearch: this.state.textSearch,
              activePage: item
            })
          }}>{item}</button>)
        } else {
          return (<button onClick={() => {
            this.props.search({
              textSearch: this.state.textSearch,
              activePage: item
            })
          }}>{item}</button>)

        }
      } else {
        if (item === this.props.activePage) {
          return (<button style={{ background: 'black', color: '#fff' }} onClick={() => { this.props.pagi(item) }}>{item}</button>)
        } else {
          return (<button onClick={() => { this.props.pagi(item) }}>{item}</button>)

        }
      }
    })
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>ID_________________________________</th>
              <th>Name</th>
            </tr>
            {data}
          </tbody>
        </table>
        {btnPage}
        <input type="text" value={this.state.textSearch} onChange={(e) => {
          this.setState({
            textSearch: e.target.value
          })
        }} />
        <button onClick={() => {
          this.props.search({
            textSearch: this.state.textSearch,
            activePage: 1
          })
        }}>Search</button>
        <input type="text" value={this.state.add} onChange={(e) => {
          this.setState({
            add: e.target.value
          })
        }} />
        <button onClick={() => {
          this.props.add(this.state.add)
        }}>ADD</button>
        <input type="text" value={this.state.update.name} onChange={(e) => {
          this.setState({
            update: {
              name: e.target.value,
              id: this.state.update.id
            }
          })
        }} />
        <button onClick={() => {
          this.props.update(this.state.update)
        }}>UPDATE</button>
      </div>
    )
  }
}

export default Items;
