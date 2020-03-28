import React from 'react'
import Header from "./Header";
import Inventory from "./Inventory"
import Order from "./Order"
import sampleFishes from '../sample-fishes'
import Fish from "./Fish";
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    };

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        const fishes = {...this.state.fishes}; // Take copy of existing state
        fishes[`fish${Date.now()}`] = fish; // Add new fish to said fishes variable
        this.setState({fishes});
    };

    loadSampleFishes = () => {
        this.setState({fishes : sampleFishes});
    };

    addToOrder = key => {
        const order = {...this.state.order};
        //add to order {fish, qty}
        order[key] = order[key] + 1 || 1;
        this.setState({order}); //set state
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = 'This shit is amazing' />
                    <ul className='fishes'>
                        {Object.keys(this.state.fishes).map(key =>
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />)}
                    </ul>
                </div>
                <Order
                    fishes={this.state.fishes}
                    currentOrder={this.state.order}
                />
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes = {this.loadSampleFishes}
                />
            </div>
        )
    }
}

export default App;
