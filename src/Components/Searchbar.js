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
            <div className="searchbar-container">
                <div className="searchbar">
                    <select value={this.state.filterKey} onChange={this.selectFilterKey} name='filterKey' className="search-select">
                        <option value=''>Select</option>
                        <option value='title'>Movie Title</option>
                        <option value='rating'>Rating</option>
                    </select>
                    <input name='searchInput' value={this.state.searchInput} onChange={e=>this.filterMovieList(e)}  placeholder=" Search" id="search-input"/>
                </div>
            </div>
        )
    }
}

export default Searchbar