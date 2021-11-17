import React, { Component } from "react";
import MusicTable from "./MusicTable";
import axios from "axios";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            MusicTable:[],
        };
    }
    table() {
        return(
            <div className='App'>
                <basicTable />
            </div>
        )
    };

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
                music: response.data,
            });
        } catch(error) {
            console.log(error);
        }
    }
        render() {
            console.log(this.state);
            return(
                <div className="App">
                    <h1>Music Table</h1>
                    <MusicTable music={this.state.MusicTable}/>
                    {this.state.MusicTable.length > 0 ? (
                        this.state.MusicTable.map((music) => {
                        return <p key={music.id}>{music.table}</p>;
                        })
                    ) : (
                        <h2>Loading</h2>
                    )}
                </div>
            );
        }
}
export default App;



