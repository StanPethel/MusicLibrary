import React, { Component } from "react";
import MusicTable from "./MusicTable";
import axios from "axios";
import TitleBar from './TitleBar'
import Footer from './Footer';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            MusicTable:[],
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
        render() {
            console.log(this.state);
            return(
                <div className="App">
                    <TitleBar />
                    <MusicTable music={this.state.MusicTable}/>
                      <Footer />
                </div>
            );
        }
}
export default App;