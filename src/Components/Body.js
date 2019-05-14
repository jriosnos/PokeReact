import React, {Component} from 'react'

class Body extends Component {
    state = {
        
    }
    
render (){
    const {name, number, type, weakness, weight, height, preEvo, nextEvo, gif, hint} = this.props.content
    return(
        <div className="container">
            <div className="row">
                <div className="col l8 pokeGif"> 
                    <div className="hint"> {hint} </div> 
                    <img className="pokeImage"src={gif}/> 
                </div>
                <section className="col l4 statistics">
                    <div className="pokeStats">Pokemon Name: {name} </div>
                    <div className="pokeStats">Pokemon Number: {number} </div> 
                    <div className="pokeStats">Pokemon Type: {type} </div>
                    <div className="pokeStats">Pokemon Weakness(es): {weakness} </div> 
                    <div className="pokeStats">Pokemon Weight: {weight} </div>
                    <div className="pokeStats">Pokemon Height: {height} </div> 
                    <div className="pokeStats">Previous Evolution: {preEvo} </div>
                    <div className="pokeStats">Next Evolution: {nextEvo} </div>
                </section>               
            </div>
        </div>
    )
}
}

export default Body