import React, {Component} from 'react';


class Movie extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleEdit: false,
            descriptionInput: this.props.description,
            toggleWatched: false
        }
    }

    toggleEdit = () =>{
        this.setState({toggleEdit: !this.state.toggleEdit});
    }

    toggleWatched=() =>{
        this.setState({toggleWatched: !this.state.toggleWatched});
    }

    handleChange = e => {
        let {value, name} = e.target;
        this.setState({[name]: value});
    };

    updateDescription = () => {
        console.log(this.props.id, this.state.descriptionInput)
        this.props.editMovie(this.props.id, this.state.descriptionInput)
        this.toggleEdit();
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
                {!this.state.toggleEdit ? (
                    <p>{this.props.description}</p>
                ) : (
                    <div>
                        <textarea
                        className="movie-form-input"
                        name="descriptionInput"
                        placeholder="Description"
                        onChange={e => this.handleChange(e)}
                        value={this.state.descriptionInput}/>
                        <button onClick={() => this.updateDescription()}>Submit</button>
                    </div>
                )}
                
                {!this.state.toggleWatched ? (
                    <p onClick={this.toggleWatched}>&#9711; Not Watched</p>
                ) : (
                    <p onClick={this.toggleWatched}>&#9673; Watched</p>
                )}


                <button onClick={this.toggleEdit}>&#9998;</button>
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