import React, { Component } from "react";

import axios from "axios";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[],
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
                users: response.data,
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
                    {this.state.users.length > 0 ? this.state.users.map((user)=>{
                        return <p>{user.title}</p>;
                    }) : <h2>Loading</h2>}
                </div>
            );
        }
}
export default App;