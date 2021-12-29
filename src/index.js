import React from 'react';

//react DOM is a Library which uses the render method 
import ReactDOM from 'react-dom';
 
import App from './Components/App/App';

// In this render method it uses the teact componet 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
//   render method uses the app component and it
//  render on to the div i.e having the id root
  document.getElementById('root')
);
