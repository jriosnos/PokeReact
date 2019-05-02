import React, {Component} from 'react'
import axios from 'axios'

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
        
        newIdentity = this.state.term
        
        axios.get('https://api.giphy.com/v1/gifs/search?q={this.state.term}&api_key=8atTWI22Zvu4AINV5J8MOt44q6ABoUUs&limit=1&rating=g')
        .then((response)=>{
            setState({gif: response.data[0].images.original.url})
        })

        axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        .then((responseData1)=>{
            responseData1.pokemon.forEach(eachStat => {
                if(eachStat.name == newIdentity){
                    
                    setState({name : eachStat.name,
                        number : eachStat.num,
                        type : eachStat.type,
                        weakness : eachStat.weaknesses,
                        weight : eachStat.weight,
                        height : eachStat.height,
                        
                    })
                    if(eachStat.prev_evolution)
                    {setState({preEvo: eachStat.prev_evolution[0].name})}
                    else {setState({preEvo: "None"}) }
                        
                    if(eachStat.next_evolution)
                    setState({nextEvo: eachStat.next_evolution[0].name}) }
                    else {setState({nextEvo: 'None'}) }
                    
                    this.props.acceptChildState(this.state)
                })
                }
            })

render (){
    return(
        <div className="pokeFinder">
            <div className="container">
                <header className="row justify-content-center">
                    <h4 className="col-4 title">Pokéfinder</h4>
                    <form /* onSubmit={this.handleSubmit} */ >
                        <section className="col-4">
                                <input type="text" onChange={this.handleChange} placeholder="Original 151 Pokemon" name="pokemon" id='poke' className="formal-control searchPoke"/>
                                <button type="submit" id='search' className="btn btn-primary pokeButton">Submit</button>
                        </section>
                    </form>
                </header>
            </div>
        </div>
    )
}
}

export default Search