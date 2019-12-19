import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


//Props - things that come out of State.
//State - Object that provides a description of your app.
//For this example state consists of the robots array and the SearchBox value.
//A Parent feeds State into a Child component. When the child receives, it becomes a prop. The child can't modify the prop. App feeds CardList.
//Even though this.state.robots is a state, it's passed to child component CardList as a prop.

//We have an App component that has two states.
//Because App owns the state.
//Any component that has state must use CLASS syntax in order to use constructor()
//The state is what changes in an app. It describes the app.
//The virtual DOM is just a javascript object that collects the entire state.
//Then React uses this state to render and pass the state properties down to components as props.
//These components which are simply PURE functions can then just render.
//Having a stable state mechanism combined with pure function components results in very predictable behavior.
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        } 
    }

//We manage the state within App.js. The App component is the only thing that can change the state.     
//However we can pass down functions as props too. We pass onSearchChange() to the SearchBox component.
//Every time there is a change of input in the search box, SearchBox executes onSearchChange via the searchChange prop.
//When onSearchChange() runs, note the setState() syntax used to update the searfield in this.state for the App above to whatever is typed.


    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value } )
    } 

//With the information we have from the search box we can now communicate with the CardList.
//First we grab the current state of robots and filter the array down to whatever names include what is currently in the searchfield state.
//Then rather than passing the current state of robots to CardList, we pass the filteredRobots instead to keep the correct robots visible as we type.
//Technically having robots in state isn't needed since our robots[] is hard-coded but normally we'll be getting this info externally, like new user signups, where tracking state will be required. Good practice.
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