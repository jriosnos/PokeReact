import React, {Component} from 'react';
import Search from './Components/Search'
import Body from './Components/Body'
import './app.css'

class App extends Component{

  state = {
    stats: {
        term : null,
        name: null,
        number: null,
        type: null, 
        weakness: null,
        weight: null,
        height: null,
        nextEvo: null,
        preEvo: null,
        gif: null,
    }
}

acceptState = (states) => {
  this.setState({
    stats: states
  })
}

render() {
  return (
    <div className="App">
      <Search acceptChildState={this.acceptState} />
      <Body name={this.state.stats.name} type={this.state.stats.type} number={this.state.stats.number} weakness={this.state.stats.weakness} weight={this.state.stats.weight} height={this.state.stats.height} nextEvo={this.state.stats.nextEvo} preEvo={this.state.stats.preEvo} gif={this.state.stats.gif} />
    </div>
  );
}
}

export default App;
