import React, {Component} from 'react'

class Body extends Component {
render (){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 pokeGif"><img id='picture' className="pokeImage"/></div>
                <section className="col-md-4 statistics">
                    <div className="pokeStats">Pokemon Name: <span id="pokeName"> </span></div>
                    <div className="pokeStats">Pokemon Number: <span id="pokeNumber"></span></div> 
                    <div className="pokeStats">Pokemon Type: <span id="pokeType"></span></div>
                    <div className="pokeStats">Pokemon Weakness(es): <span id="pokeWeakness"></span></div> 
                    <div className="pokeStats">Pokemon Weight: <span id="pokeWeight"> </span></div>
                    <div className="pokeStats">Pokemon Height: <span id="pokeHeight"> </span></div> 
                    <div className="pokeStats">Previous Evolution: <span id="pokePrevious"> </span></div>
                    <div className="pokeStats">Next Evolution: <span id="pokeNext"></span></div>
                </section>               
            </div>
        </div>
    )
}
}

export default Body