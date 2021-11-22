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
            search:[],
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

    filterSongs = (searchSongs)=> {
        let filteredSongs = this.state.search.filter((song)=>{
            if(song.title.includes(searchSongs)|| song.artist.includes(searchSongs)|| song.album.includes(searchSongs)|| song.genre.includes(searchSongs)|| song.releaseDate.includes(searchSongs)){
            return true;
        } else { 
            return false;
        }
        });
        this.setState({
            search: filteredSongs
        });
    }
    
   
    render() {
        const{search}=this.state;
        console.log(this.state);
        return(
            <div className="App">
                <TitleBar />
                <MusicTable music={this.state.MusicTable}/>
                <Searchbar filterSongs={this.filterSongs} getAllSongs={this.getSongs}/>
                    <Footer />
            </div>
        );
    }
}
export default App;