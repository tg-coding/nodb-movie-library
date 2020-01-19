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

    handleInputChange = e => {
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
                
                <h5 className="movie-title">{this.props.title}</h5>
                
                <div className="ratings">
                    <h6>{this.props.rating}</h6>
                    <h6 id="imdb-rating">{this.props.imdbRating}<strong id="imdb-rating10">/10</strong></h6>
                </div>
                
                {!this.state.toggleEdit ? (
                    <p id="description">{this.props.description}</p>
                ) : (
                    <div>
                        <textarea
                        className="movie-form-input"
                        id="edit-description"
                        name="descriptionInput"
                        placeholder="Description"
                        onChange={e => this.handleInputChange(e)}
                        value={this.state.descriptionInput}/>
                        
                        <button onClick={() => this.updateDescription()} id="submit-edit-btn">&#10004;</button>
                    </div>
                )}
                
                <div className="watched-edit-container">
                    
                    <button onClick={this.toggleEdit} id="edit-btn">&#9998;</button>
                    
                    {!this.state.toggleWatched ? (
                        <button onClick={this.toggleWatched} className="toggle-watched">Not Watched &#9711;</button>
                    ) : (
                        <button onClick={this.toggleWatched} className="toggle-watched">Watched &#9673;</button>
                    )}
                    
                </div>

                <button onClick={() => this.props.deleteMovie(this.props.id)} id="delete-btn">&#10005;</button>

             </div>
        )
    }
}


export default Movie