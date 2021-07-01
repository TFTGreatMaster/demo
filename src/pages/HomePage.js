import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <h1>Trang chủ</h1>
                <a href="/items">Chuyển qua trang Items</a>
            </div>
        )
    }
}
export default HomePage;