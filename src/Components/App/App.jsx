import React from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SerachBox";
import './App.css';


// we are extracting the name function  or name api
const name= require('@rstacruz/startup-name-generator');

//there are 2 types of components 
// 1. Function based Component
//2.class based Component

class App extends React.Component{
    // this is new method to create the state
    state = {
        headerText:"Name It!!!",
        headerExpanded:true,
        suggestedNames:[],
    };
    // old method to create the state
    // constructor (){
    //     super();
    //     this.state= {
    //         headerText:"Name It"
    //     }
    // }

//Defining the method handleInputChange
handleInputChange=(inputText)=>{

    this.setState({
        headerExpanded:!inputText,
        //as user types the input value then we need to save that value so we add into the state 
        suggestedNames:inputText?name(inputText):[],                          
    });
};   

   //render method returns the HTML element 
    render(){
      
        return (
            <div>
                <Header     headerExpanded={this.state.headerExpanded} 
                            headTitle={this.state.headerText}/>
                {/* In this searchBox component  we are calling the handleInputChange()
                method */}
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
            
        )
    }
}

// function App(){
//     return <h1>This is my Functional Component</h1>
// }

export default App; 