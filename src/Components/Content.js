import React, {Component} from 'react';
import Profile from './Profile';
import Movie from './Movie';
import AddMovieBtn from './AddMovieBtn';
import AddMovieForm from './AddMovieForm';


class Content extends Component{
    render(){
        return(
            <div>
                <Profile />
                <Movie />
                {!this.state.toggleEdit ? (
                <AddMovieBtn />
            ) : (
                <AddMovieForm />
            )}
            </div>
        )
    }
}

export default Content