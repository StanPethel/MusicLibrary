import React, { Component } from "react";
import MusicTable from "./MusicTable";
import axios from "axios";
import TitleBar from './TitleBar'
import Footer from './Footer';
import Searchbar from './Searchbar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            MusicTable:[],
            SearchBar:[],
             
        };
    }
    
    componentDidMount(){
        this.getSongs();
    }
    async getSongs() {
        try{
            let response = await axios.get(
                "http://localhost:3001/api/songs" 
            );
            console.log(response.data);
            this.setState({
                MusicTable: response.data,
            });
        } catch(error) {
            console.log(error);
        }
    }

    filteredSongs = (songSearch)=> {
        let filteredSongs = this.state.MusicTable.filter((song)=>{
            if(song.title.includes(songSearch)|| song.artist.includes(songSearch)|| song.album.includes(songSearch)|| song.genre.includes(songSearch)|| song.releaseDate.includes(songSearch)){
            return true;
        } else { 
            return false;
        }
        });
        this.setState({
            SearchBar: filteredSongs
        });
    }
    
   
    render() {
        
        return(
            <div> 
                <TitleBar />
                <MusicTable music={this.state.MusicTable}/>
                <Searchbar filteredSongs={this.filterSongs} getAllSongs={this.SearchBar}/>
                <Footer />
            </div>
        );
    }
}
export default App;