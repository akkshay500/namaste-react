import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state ={ 
            count:0
        }
    }
    render(){
        const {name,location} = this.props;
        const {count} = this.state;
        return(
            <div>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>{
                this.setState({count: count+1});
            }}>Increase Count</button>
           <UserContext.Consumer>
            {({loggedInUser})=> <div>Name : {loggedInUser}</div>} 
           </UserContext.Consumer>
            
            <div>Location : {location}</div>
            </div>
        )
    }
}

export default UserClass;