import React, {Component} from 'react'

class Body extends Component {
render (){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 pokeGif"><img id='picture' className="pokeImage"/></div>
                <section className="col-md-4 statistics">
                    <div className="pokeStats">Pokemon Name: {this.props.name} </div>
                    <div className="pokeStats">Pokemon Number: {this.props.number} </div> 
                    <div className="pokeStats">Pokemon Type: {this.props.type} </div>
                    <div className="pokeStats">Pokemon Weakness(es): {this.props.weakness} </div> 
                    <div className="pokeStats">Pokemon Weight: {this.props.weight} </div>
                    <div className="pokeStats">Pokemon Height: {this.props.height} </div> 
                    <div className="pokeStats">Previous Evolution: {this.props.preEvo} </div>
                    <div className="pokeStats">Next Evolution: {this.props.nextEvo} </div>
                </section>               
            </div>
        </div>
    )
}
}

export default Body