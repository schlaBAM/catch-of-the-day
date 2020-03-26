import React from 'react'
import Header from "./Header";
import Inventory from "./Inventory"
import Order from "./Order"

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
        const fishes = {...this.state.fishes}; // Take copy of existing state
        fishes[`fish${Date.now()}`] = fish; // Add new fish to said fishes variable
        this.setState({fishes});
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = 'This shit is amazing' />
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;
