import React, {Component} from 'react';

class Searchbar extends Component{
    constructor(){
        super()
        this.state = {
            filterKey: '',
            searchInput: '',
        }
    }

    selectFilterKey = e => {
        const {value} = e.target
        this.setState({filterKey: value, searchInput: ''})
        this.props.filterMovies(this.props.movies);
    }

    filterMovieList = e => {
        const {value} = e.target
        if(!this.state.filterKey){
            return this.setState({searchInput: ''})
        }
        this.setState({searchInput: value}, ()=>{
            const searched = this.props.movies.filter(movie => movie[this.state.filterKey].includes(this.state.searchInput))
            this.props.filterMovies(searched)
        })
    }

    render(){
        return(
            <div>
                <select value={this.state.filterKey} onChange={this.selectFilterKey} name='filterKey'>
                    <option value=''>Select</option>
                    <option value='title'>Movie Title</option>
                    <option value='rating'>Rating</option>
                </select>
                <input name='searchInput' value={this.state.searchInput} onChange={e=>this.filterMovieList(e)}/>
            </div>
        )
    }
}

export default Searchbar