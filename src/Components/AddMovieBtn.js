import React from 'react';

function AddMovieBtn (props){
        return(
            <button onClick={props.toggleAdd} className="add-movie-btn">&#8853;</button>
        )
}

export default AddMovieBtn