import React from "react";
import './SearchBox.css';

// instead of writing props we used the destructuring method
const SearchBox=({onInputChange})=> {
    return (
        <div className="search-container">
            <input 
            onChange={(event)=>onInputChange(event.target.value)}
             placeholder="Type Keywords" className="search-input" />
        </div>
    );
}

export default SearchBox;