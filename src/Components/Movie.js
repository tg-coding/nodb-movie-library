import React, {Component} from 'react';


class Movie extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleEdit: false,
        }
    }

    toggleEdit = () =>{
        this.setState({toggleView: !this.state.toggleView});
    }

    render(){
        return(
            <div className="movie">
                <img src={this.props.img} alt={this.props.title} id="movie-poster" />
                <h5>{this.props.title}</h5>
                <div className="ratings">
                    <h6>{this.props.rating}</h6>
                    <h6>{this.props.imdbRating}<strong id="imdbRating10">/10</strong></h6>
                </div>
                <p>{this.props.description}</p>
                <button onClick={() => this.props.toggleEdit(this.props.id)}>&#9998;</button>
                <button onClick={() => this.props.deleteMovie(this.props.id)}>&#10005;</button>
             </div>
        )
    }
}


// function Movie({title, img, description, rating, imdbRating, id, toggle, deleteMovie}) {
//         return(
//             <div className="movie">
//                 <img src={img} alt={title} id="movie-poster" />
//                 <h5>{title}</h5>
//                 <div className="ratings">
//                     <h6>{rating}</h6>
//                     <h6>{imdbRating}<strong id="imdbRating10">/10</strong></h6>
//                 </div>
//                 <p>{description}</p>
//                 <button onClick={() => toggle(id)}>&#9998;</button>
//                 <button onClick={() => deleteMovie(id)}>&#10005;</button>
//             </div>
//         )
// }

export default Movie