import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


//Props - things that come out of State.
//State - Object that provides a description of your app.
//For this example state consists of the robots array and the SearchBox value.
//A Parent feeds State into a Child component. When the child receives, it becomes a prop. The child can't modify the prop. App feeds CardList.
//Even though this.state.robots is a state, it's passed to child component CardList as a prop.
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        } 
    }

    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value } )

    } 

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());       
        })
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;