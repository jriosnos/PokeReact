import React, {Component} from 'react'
import axios from 'axios'

class Search extends Component{
    state = {
        term : null
    }
    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        .then(res => {
            console.log(res)
        })
        axios.get('https://api.giphy.com/v1/gifs/search?q=bulbasaur&api_key=8atTWI22Zvu4AINV5J8MOt44q6ABoUUs&limit=1&rating=g')
        .then(res=>{
            console.log(res)
        })
    }
render (){
    return(
        <div className="pokeFinder">
            <div className="container">
                <header className="row justify-content-center">
                    <h4 className="col-4 title">Pokéfinder</h4>
                    <section className="col-4">
                            <input type="text" placeholder="Original 151 Pokemon" name="pokemon" id='poke' className="formal-control searchPoke"/>
                            <input type="submit" value="Submit" id='search' className="btn btn-primary pokeButton"/>
                    </section>
                </header>
            </div>
        </div>
    )
}
}

export default Search