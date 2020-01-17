import React, {Component} from 'react';
import Profile from './Profile';
import Movie from './Movie';
import AddMovieBtn from './AddMovieBtn';
import AddMovieForm from './AddMovieForm';
import Searchbar from './Searchbar';
import axios from 'axios';
// import axios from 'axios';


class Content extends Component{
    constructor(){
        super ();
        this.state = {
            movies: [],
            title: "",
            img: "",
            description: "",
            rating: "",
            imdbRating:"",
            id: 0,
            filteredMovies: [],
            toggleAdd: false,
            // toggleEdit: false,
            editId: null
        }
    }

    handleChange = e => {
        let {value, name} = e.target;
        this.setState({[name]: value});
    };

    toggleAdd = () => {
        this.setState({toggleAdd: !this.state.toggleAdd})
    };

    // toggleEdit = () => {
    //     this.setState({toggleEdit: !this.state.toggleEdit})
    // };

    componentDidMount(){
        axios.get('/api/movies').then(result =>
            this.setState({
                movies: result.data,
                filteredMovies: result.data,
                selectedTitle: result.data[0].title,
                selectRating: result.data[0].rating,
            })
        )
    };

    // editMovie = (id) => {
    //     axios.put(`/api/movie/${id}`).then(res => {
    //         this.setState({movies: res.data})
    //     }).catch(err => console.log(err))
    //     // this.toggleEdit()
    // }

    editMovie = (id, description) => {
        axios.put(`/api/movie/${id}`, {description}).then(res => {
            this.setState({movies: res.data})
        }).catch(err => console.log(err))
    }

    addMovie = () => {
        const {title, img, description, rating, imdbRating} = this.state;
        axios.post('/api/movie', {title, img, description, rating, imdbRating}).then(res => {
            this.setState({
                title: "",
                img: "",
                description: "",
                rating: "",
                imdbRating:"",
                movies: res.data})
        });
        this.toggleAdd()
    };

    deleteMovie = (id) => {
        axios.delete(`/api/movie/${id}`).then(res =>{
            this.setState({movies: res.data})
        }).catch(err => console.log(err))
    };

    filterMovies = filteredList => {
        if(filteredList.length){
            this.setState({
                filteredMovies: filteredList,
                selectedTitle: filteredList[0].title,
                selectedRating: filteredList[0].rating
            });
        }else{
            this.setState({
                filteredMovies: filteredList,
                selectTitle: "",
                selectRating: ""
            });
        }
    };




    
    render(){
        const {movies, filteredMovies, selectedTitle, selectedRating} = this.state;
        if(movies.length){
            return(
                <div className="content-container">
                    <div className="profile-and-search">
                        <Profile />
                        <Searchbar 
                            movies={movies}
                            filterMovies={this.filterMovies}
                        />
                    </div>
                    <div className="movies-container">
                        {this.state.filteredMovies.map((element) => {
                            return (
                                <Movie
                                    key={element.id}
                                    id={element.id}
                                    title={element.title}
                                    img={element.img}
                                    description={element.description}
                                    rating={element.rating}
                                    imdbRating={element.imdbRating}
                                    deleteMovie={this.deleteMovie}
                                    editMovie={this.editMovie}
                                    filteredMovies={filteredMovies}
                                />
                            )
                        })}

                        {!this.state.toggleAdd ? (
                            <AddMovieBtn 
                                toggleAdd={this.toggleAdd}
                            />
                        ) : (
                            <div>
                                <AddMovieForm 
                                    title={this.state.title}
                                    img={this.state.img}
                                    description={this.state.description}
                                    rating={this.state.rating}
                                    imdbRating={this.state.imdbRating}
                                    addMovie={this.addMovie}
                                    handleChange={this.handleChange}
                                    toggleAdd={this.toggleAdd}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default Content