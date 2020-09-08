import React, { Component } from 'react'
import { render } from 'react-dom'
import img from './image.png';
import './style.css';

export default class App extends Component {

   constructor() {
      super();

      //etat
      this.state = {
         message: "Hello word !"
      }
   }

   //comportement

   handleMessage () {

      this.setState( {message: "Coucou le monde !"});
   }

   //rendu

   render () { 
      let {message} = this.state;

      return (
         <div>
            <img id="foto" src={img} alt="une image legere" />
            <h1>{message}</h1>
            <button onClick={this.handleMessage.bind(this)}>Changer le message</button>
         </div>
      )
   }
}

//appel de la class sinon ça foire
render(
   <App />,
   document.getElementById('root')
)