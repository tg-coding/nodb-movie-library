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

    componentDidMount = () => {
        axios.get('/api/movies').then(res =>{
            this.setState({
                movies: res.data,
                filteredMovies: res.data,
                selectedTitle: res.data[0].title,
                selectRating: res.data[0].rating})
        }).catch(err => console.log(err))
    };

    editMovie = (id, description) => {
        axios.put(`/api/movie/${id}`, {description}).then(res => {
            this.setState({
                movies: res.data,
                filteredMovies: res.data,})
        }).catch(err => console.log(err))
    };


    // editEmployee = updatedEmployee => {
	// 	axios
	// 		.put(`/api/employees/${updatedEmployee.id}`, updatedEmployee)
	// 		.then(res => {
	// 			this.setState({
	// 				employees: res.data,
	// 				filteredEmployees: res.data,
	// 				selectedFirstName: res.data[0].firstName,
	// 				selectedLastName: res.data[0].lastName,
	// 				selectedId: res.data[0].id,
	// 				selectedEmail: res.data[0].email,
	// 				selectedGender: res.data[0].gender
	// 			});
	// 		});
	// };


    addMovie = () => {
        const {title, img, description, rating, imdbRating} = this.state;
        axios.post('/api/movie', {title, img, description, rating, imdbRating}).then(res => {
            this.setState({
                title: "",
                img: "",
                description: "",
                rating: "",
                imdbRating:"",
                movies: res.data,
                filteredMovies: res.data})
        });
        this.toggleAdd()
    };

    deleteMovie = (id) => {
        axios.delete(`/api/movie/${id}`).then(res =>{
            this.setState({
                movies: res.data,
                filteredMovies: res.data,})
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
        const {movies, filteredMovies,} = this.state;
        // if(movies.length){
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
                            <div className="add-movie-form">
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
        // } else {
        //     return <div></div>
        // }
    }
}

export default Content