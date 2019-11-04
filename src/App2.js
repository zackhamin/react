import React from 'react';
import first from './images/bowser.png';
import second from './images/mario.jpeg';
import third from './images/mariocart.png';
import fourth from './images/marioretro.png';
import fifth from './images/retroblock.jpeg';
import sixth from './images/tunnel.png';

import Card from './Card';




import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className ="App">
      <div>
        <h3>News Headlines</h3>
        <div>
          <Card pic = {first} text = "News Flash Mario is now gender neutral " topic = " Mario News" />
      
          <Card pic = {second} text = "News Flash the last news flash was wrong " topic = " Princess News" />
          
          <Card pic = {third} text = "News Flash no it wasn't! " topic = " Mushroom News" />
          
        </div>

      </div>

      <div>
        <h3>Sports Headlines</h3>
          <Card pic = {fourth} text = "News Flash pixel art is amazing " topic = " Crazy News" />
          
          <Card pic = {fifth} text = "News Flash luigi is in the closet " topic = " Luigi  News" />
          
          <Card pic = {sixth} text = "News Flash this isn't normal news " topic = " BBC  News" />
         
        </div>

      </div>
    )
  }
}

export default App;
