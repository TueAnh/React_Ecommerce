import React from 'react';
import MenuBar from './components/MenuBar'
import HomePage from './components/HomePage'
import './App.css'
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <MenuBar />
      </div>
    );
  }
}
export default App;
