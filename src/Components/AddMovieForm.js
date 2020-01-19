import React from 'react';

function AddMovieForm (props){    
    
    return(
            <div className="movie-form-container">
                <input
                    className="movie-form-input"
                    id="img-input"
                    name="img"
                    placeholder="Image URL"
                    onChange={e => props.handleChange(e)}
                    value={props.img}
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
                    id="description-input"
                    name="description"
                    placeholder="Description"
                    onChange={e => props.handleChange(e)}
                    value={props.description}
                />
                <div className="hvr-icon-rotate">    
                    <button onClick={() => props.addMovie()} id="submit-add-btn" className="hvr-icon">&#10004;</button>
                </div>
                <div className="hvr-icon-rotate">
                    <button onClick={props.toggleAdd} id="cancel-add-btn" className="hvr-icon">&#10005;</button>
                </div>
            </div>
        )
}

export default AddMovieForm