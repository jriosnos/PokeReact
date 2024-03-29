import React, {Component} from 'react'
import axios from 'axios'
import Body from './Body'

class Search extends Component{
    state = {
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
        hint: 'Please Submit one of the Original 151 Pokemon',
    }

    handleChange = (e) => {
        var identity = e.target.value
        var newIdentity = identity.charAt(0).toUpperCase() + identity.slice(1)
        this.setState({
            term: newIdentity
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        var newIdentity = this.state.term

        axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        .then((responseData1)=>{
            responseData1.data.pokemon.forEach(eachStat => {
                if(eachStat.name === newIdentity){
                    var trueWeakness = eachStat.weaknesses.join(", ")
                    this.setState({
                        name : eachStat.name,
                        number : eachStat.num,
                        type : eachStat.type,
                        weakness : trueWeakness,
                        weight : eachStat.weight,
                        height : eachStat.height,
                    })
                    if(eachStat.prev_evolution)
                    {this.setState({preEvo: eachStat.prev_evolution[0].name})}
                    else {this.setState({preEvo: 'None'}) }
                        
                    if(eachStat.next_evolution)
                    {this.setState({nextEvo: eachStat.next_evolution[0].name})}
                    else {this.setState({nextEvo: 'None'})}
                    console.log(this.state)
                    

    
                    axios.get(`https://api.giphy.com/v1/gifs/search?q=${newIdentity}&api_key=${process.env.REACT_APP_POKEMON_API_KEY}&limit=1&rating=g`)
                    .then((response)=>{
                        console.log(response)
                        var gifImage = response.data.data[0].images.original.url
                        this.setState({gif: gifImage})
                    })
                    console.log(this.state)
                    
                    this.setState({
                        hint: null,
                    })
                }
                })
            })
        }

render (){
    return(
        <div className="pokeFinder">
            <div className="container search">
                <header className="row ">
                    <h4 className="title col l4 push-l2 push-m4">Pokéfinder</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-field col l3">
                            <input type="text" onChange={this.handleChange} placeholder="Search Pokemon" className="col l3 searchPoke"/>
                        </div>
                        <button type="submit" id='search' className="col btn indigo pokeButton">Submit</button>
                    </form>
                </header>
            </div>
            <Body content={this.state}/>
        </div>
    )
}
}

export default Search;