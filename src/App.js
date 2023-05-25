//import logo from './logo.svg';
import React from 'react';
import './App.css';


class FirstReact extends React.Component
{
  render() {
    return (
<div className="App">
      <h1>FirstReact</h1>
      </div>
    )
  }
}

class SecondReact extends React.Component
{
  render() {
    return (
<div className="App">
      <h1>SecondReact</h1>
      
      </div>
    )
  }
}

class ThirdReact extends React.Component
{
  render() {
    return (
<div className="App">
      <h1>ThirdReact</h1>
      </div>
    )
  }
}

function FourthReact() {
return (
      <h1>FourthReact</h1>
)

}


//parent
function App() {
  return (
    <div className="App">
    <h1>React Tutorial</h1>
      <FirstReact></FirstReact>
     <SecondReact></SecondReact>
     <ThirdReact></ThirdReact>
     <FourthReact></FourthReact>


    </div>
  );
}


export default App;

