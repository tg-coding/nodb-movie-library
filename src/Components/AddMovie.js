import React, {Component} from 'react';

class AddMovie extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggleAdd: false,
        }
    }

    toggleAdd = () =>{
        this.setState({toggleView: !this.state.toggleView});
    }

    render(){
        return(
            <div>
                {!this.state.toggleView ? (
                    <button onClick={() => toggleAdd(id)}>&#10010;</button>
                ) : (
                    <div className="movie-form-container">
                        <input
                            className="movie-form-input"
                            name="img"
                            placeholder="Image URL"
                            onChange={e => this.props.handleChange(e)}
                            value={this.props.img}
                        />
                        <input
                            className="movie-form-input"
                            name="title"
                            placeholder="Movie Title"
                            onChange={e => props.handleChange(e)}
                            value={props.title}
                        />
                        <input
                            className="movie-form-input"
                            name="rating"
                            placeholder="Rating"
                            onChange={e => props.handleChange(e)}
                            value={props.rating}
                        />
                        <input
                            className="movie-form-input"
                            name="imdbRating"
                            placeholder="IMDb Rating"
                            onChange={e => props.handleChange(e)}
                            value={props.imdbRating}
                        />
                        <textarea
                            className="movie-form-input"
                            name="description"
                            placeholder="Description"
                            onChange={e => props.handleChange(e)}
                            value={props.description}
                        />
                        <button onClick={() => props.addMovie()}>&#10004;</button>
                        {/* <button onClick={() => props.cancelMovie()}>&#10005;</button> */}
                    </div>
                )}
            </div>
        )
    }
}

export default AddMovie