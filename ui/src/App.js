import React, { Component } from "react";
import ReactDOM from "react-dom";

import logo from './logo.svg';
import './App.css';

// let state = {}
const url = "https://5m9pglbuwl.execute-api.us-east-1.amazonaws.com/Prod/search/"

class App extends Component {
  constructor() {
    super();
    this.state = { data: {} };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(e) {
    e.preventDefault();
    console.log('button clicked.');

    const response = await fetch(url)
    const data = await response.json();
    this.setState({ data });
  }

  render() {
    return (
      <div className="App">
       <header className="App-header">
        <h1>
        <button onClick={this.handleSearch}>Search Reports</button>
        </h1>
        <p>
        location: {this.state.data.location}<br /><br />
        message: {this.state.data.message}
        </p>
        </header>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

// function App() {
//   async function search(e) {
//     e.preventDefault();
//     console.log('button clicked.');

//     const res = await fetch(url, {mode: 'no-cors'})
//     console.log(res.json())

//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           {/* Serverless app {state} */}
//         </p>

//         <button onClick={search}>
//           Search
//         </button>

//       </header>
//     </div>
//   );
// }

// export default App;
