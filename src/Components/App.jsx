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
            value: 0
        };
    }
    
    componentDidMount(){
        this.fetchUsers();
    }
    async fetchUsers() {
        try{
            let response = await axios.get(
                "http://www.devcodecampmusiclibrary.com/api/music" 
            );
            console.log(response.data);
            this.setState({
                MusicTable: response.data,
            });
        } catch(error) {
            console.log(error);
        }
    }
    userSearch = () => {
        let randomSearch = this.setRandomSearchValue();
        this.setState({
          value: randomSearch
        });
      };
        render() {
            console.log(this.state);
            return(
                <div className="App">
                    <TitleBar />
                    <MusicTable music={this.state.MusicTable}/>
                    <Searchbar onClick={this.userSearch}/>
                      <Footer />
                </div>
            );
        }
}
export default App;