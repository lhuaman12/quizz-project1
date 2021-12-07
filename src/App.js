//import './App.css';
import React from 'react';
import Quizz from './components/Quizz.js';
import Navbar from './components/Navbar';

class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {score:0};
  }
  render(){
    return(
    <div>
      <Navbar/>
      <br/>
      <div className="container">
        <div className="row">
            <div className="col s6">
                <Quizz />
            </div>
        </div>
      </div>
    </div>

    );
  }
}

export default App;