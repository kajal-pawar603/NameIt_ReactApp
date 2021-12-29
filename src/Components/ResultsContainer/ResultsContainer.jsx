import React from "react";
import NameCard from "../NameCard/NameCard";
import './ResultsContainer.css';

const ResultsContainer=({suggestedNames}) => {
    //we need to display all sugeested names of input so we are using the 
    // Array.map method
    const suggestedNameJsx=suggestedNames.map(suggestedName =>{
        return <NameCard key={suggestedName}suggestedName={suggestedName}/>
    });
    
    return (
        // we need to creat the card for each suggested name so we need to use flexbox property
        <div className="results-container">{suggestedNameJsx}</div>
    );
};

export default ResultsContainer;