import React, {Component} from'react';
import './Searchbar.css';

class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {
        songSearch: ''
        }
    }
    handleChange = (event) =>{
        if(event.target.value == ''){
            this.props.getSongs();
        }
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit =(event) =>{
        event.preventDefault();
        this.props.filterSongs(this.state.songSearch)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search Bar</label>
                    <input name="songSearch" value={this.state.songSearch} type="text" onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                </form> 
            </div>
        );
    }
}

export default Searchbar;