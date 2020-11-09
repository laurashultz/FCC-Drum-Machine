import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const projTitle = "drum machine";
const beats = [
               {btn: 'Q', name: 'Clap-1', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/92[kb]Moombah-Clap-1.wav.mp3'},
               {btn: 'W', name: 'Clap-2', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/76[kb]Moombah-Clap-2.wav.mp3'},
               {btn: 'E', name: 'Kick-1', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/119[kb]Moombah-Kick-1.wav.mp3'},
               {btn: 'A', name: 'Kick-2', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/66[kb]Moombah-Kick-2.wav.mp3'},
               {btn: 'S', name: 'Kick-3', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/78[kb]Moombah-Kick-5.wav.mp3'},
               {btn: 'D', name: 'Kick-4', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/69[kb]Moombah-Kick-4.wav.mp3'},
               {btn: 'Z', name: 'Kick-5', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/60[kb]Moombah-Kick-8.wav.mp3'},
               {btn: 'X', name: 'Vocal-1', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/93[kb]Moombah-Vocal-1.wav.mp3'},
               {btn: 'C', name: 'Vocal-2', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/63[kb]Moombah-Vocal-2.wav.mp3'}
              ];

class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      objects: beats,
      display: ''
    }
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

  }
componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress);
  }
componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }
 onKeyPress(event){
   var index = this.state.objects.findIndex(x=> x.btn === event.key.toUpperCase());
   if(index>=0){
    var audio = document.getElementById(event.key.toUpperCase());
     this.setState({
      display: this.state.objects[index].name
      });
     audio.play();
   } 
 } 
  
 onClick(event){
  var audio = document.getElementById(event.target.value);
   var ind = this.state.objects.findIndex(x=> x.btn === event.target.value);
   this.setState({
     display: this.state.objects[ind].name
   });
   audio.play();
 }

 render() {
  return(
    
    <div class="brushed" id="drum-machine">
        <div class= "trans-bg panel" id="controls">
        <span class="oi text-LED" data-glyph="audio"></span> <h1 class="text-LED" id="title">{projTitle}</h1>
        <div id="display">{this.state.display}</div>

      </div>
      <div class="trans-bg panel" id="pads">
        <div class="row1 lines">
          <button class="drum-pad" value={this.state.objects[0].btn} id={this.state.objects[0].name} onClick = {this.onClick}>Q<audio class="clip" id="Q" src={this.state.objects[0].url}></audio></button>
          <button class="drum-pad" value={this.state.objects[1].btn} id={this.state.objects[1].name} onClick = {this.onClick}>W<audio class="clip" id="W" src={this.state.objects[1].url}></audio></button>   
          <button class="drum-pad" value={this.state.objects[2].btn} id={this.state.objects[2].name} onClick = {this.onClick}>E<audio class="clip" id="E" src={this.state.objects[2].url}></audio></button>  
        </div>
        <div class="row2 lines">
          <button class="drum-pad" value={this.state.objects[3].btn} id={this.state.objects[3].name} onClick = {this.onClick}>A<audio class="clip" id="A" src={this.state.objects[3].url}></audio></button>
          <button class="drum-pad" value={this.state.objects[4].btn} id={this.state.objects[4].name} onClick = {this.onClick}>S<audio class="clip" id="S" src={this.state.objects[4].url}></audio></button>   
          <button class="drum-pad" value={this.state.objects[5].btn} id={this.state.objects[5].name} onClick = {this.onClick}>D<audio class="clip" id="D" src={this.state.objects[5].url}></audio></button>   
        </div>
        <div class="row3 lines">
          <button class="drum-pad" value={this.state.objects[6].btn} id={this.state.objects[6].name} onClick = {this.onClick}>Z<audio class="clip" id="Z" src={this.state.objects[6].url}></audio></button>
          <button class="drum-pad" value={this.state.objects[7].btn} id={this.state.objects[7].name} onClick = {this.onClick}>X<audio class="clip" id="X" src={this.state.objects[7].url}></audio></button>   
          <button class="drum-pad" value={this.state.objects[8].btn} id={this.state.objects[8].name} onClick = {this.onClick}>C<audio class="clip" id="C" src={this.state.objects[8].url}></audio></button> 
        </div>
      </div>
    </div>
    
    
  ); 
 } 
  
  
}


ReactDOM.render(<DrumMachine />, document.getElementById('root'));

